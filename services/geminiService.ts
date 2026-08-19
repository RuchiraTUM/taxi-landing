/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { PocEvaluationRequest, PocEvaluationResult } from "../types";

const API_KEY = process.env.API_KEY || process.env.GEMINI_API_KEY || '';

let chatSession: Chat | null = null;

export const initializeFleetChat = (): Chat => {
  if (chatSession) return chatSession;

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  chatSession = ai.chats.create({
    model: 'gemini-3.7-flash',
    config: {
      systemInstruction: `You are 'FleetMind AI Dispatch Brain Consultant', an expert in taxi & mobility fleet operations, vehicle-trip matching algorithms, Leer KM (deadhead empty miles) reduction, and dispatch automation.
      
      Company: FleetMind
      Mission: Help taxi companies and mobility fleets 'Do more with the same car' by training an AI brain on their past operational trends to replace gut-feeling dispatch with predictive neural matching.
      
      Core Value Pillars:
      1. Demand forecasting for proactive vehicle pre-positioning before peak demand surges.
      2. Drastic reduction of Leer KM (empty deadhead mileage) by 25-40%.
      3. Multi-parameter dynamic dispatch factoring traffic, SLA, battery/fuel level, driver habits, and passenger lifetime value.
      4. Driver & customer behavioral intelligence.
      5. Increasing Fleet Yield (more paid fares per vehicle per shift).
      6. Eradicating dispatcher fatigue and radio chaos.
      
      Tone: Pragmatic, data-driven, empathetic to taxi fleet owners and dispatchers, professional, and outcome-oriented.
      Answer questions directly, suggest concrete numbers, and explain how a FleetMind POC operates (7-day historical telemetry ingest -> simulated backtesting -> shadow dispatch -> live autonomous matching).`,
    },
  });

  return chatSession;
};

export const sendFleetMessage = async (message: string): Promise<string> => {
  if (!API_KEY) {
    return "FleetMind AI brain ready in demonstration mode. FleetMind is engineered to train on your dispatch logs, map telemetry, and driver behavioral trends to eliminate up to 38% of Leer KM.";
  }

  try {
    const chat = initializeFleetChat();
    const response: GenerateContentResponse = await chat.sendMessage({ message });
    return response.text || "Dispatch telemetry synchronized.";
  } catch (error) {
    console.error("FleetMind AI Error:", error);
    return "FleetMind Dispatch Neural Core active. Please ask about Leer KM reduction, demand forecasting, or POC implementation for your fleet size.";
  }
};

export const evaluateFleetPoc = async (data: PocEvaluationRequest): Promise<PocEvaluationResult> => {
  if (!API_KEY) {
    // Deterministic fallback based on inputs
    const fleetScale = data.fleetSize;
    const estReduction = fleetScale > 100 ? "32% - 39%" : "26% - 34%";
    const estRevMonthly = `$${Math.round(fleetScale * 1450).toLocaleString()}`;
    
    return {
      feasibilityScore: 96,
      estimatedEmptyKmReduction: estReduction,
      monthlyRevenueUpside: estRevMonthly,
      aiTrainingDaysRequired: fleetScale > 200 ? 5 : 7,
      recommendedDeploymentPhases: [
        "Historical Dispatch Log Ingestion (3-6 months CSV/API dump)",
        "Neural Trip-Matching Shadow Mode (Simulate matches alongside human dispatchers)",
        "Cluster-Based Pre-positioning Rollout in Top 3 Demand Corridors",
        "Full Autonomous Multi-Parameter Dispatch with Human Override Guardrails"
      ],
      customStrategyNote: `For a fleet of ${data.fleetSize} vehicles operating in ${data.city || 'urban centers'}, moving from ${data.currentDispatchMethod || 'manual dispatch'} to FleetMind will specifically solve ${data.mainPainPoint || 'empty deadhead miles'} by pre-dispatching idle vehicles 12 minutes prior to historical surge peaks.`
    };
  }

  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    const prompt = `Analyze this taxi/fleet operator's profile and generate a tailored POC (Proof of Concept) evaluation report in JSON format:
    Fleet Size: ${data.fleetSize} vehicles
    City/Region: ${data.city}
    Primary Fleet Type: ${data.primaryFleetType}
    Current Dispatch Method: ${data.currentDispatchMethod}
    Main Operational Pain: ${data.mainPainPoint}

    Provide strict JSON with fields:
    {
      "feasibilityScore": number (85-99),
      "estimatedEmptyKmReduction": string (e.g. "31% - 37%"),
      "monthlyRevenueUpside": string (e.g. "$42,000 / mo"),
      "aiTrainingDaysRequired": number (3-7),
      "recommendedDeploymentPhases": array of 4 concise strings,
      "customStrategyNote": string (2-3 sentences explaining exactly how the AI brain will train on their trends and solve their specific pain point)
    }`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.7-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
      }
    });

    const parsed = JSON.parse(response.text || '{}');
    return {
      feasibilityScore: parsed.feasibilityScore || 95,
      estimatedEmptyKmReduction: parsed.estimatedEmptyKmReduction || "28% - 36%",
      monthlyRevenueUpside: parsed.monthlyRevenueUpside || `$${Math.round(data.fleetSize * 1350).toLocaleString()}`,
      aiTrainingDaysRequired: parsed.aiTrainingDaysRequired || 5,
      recommendedDeploymentPhases: parsed.recommendedDeploymentPhases || [
        "Historical Telemetry & Fare Matrix Ingest",
        "Shadow-Dispatch Simulation Benchmarking",
        "Predictive Repositioning & Surge Staging",
        "Closed-Loop Multi-Parameter Dynamic Dispatch"
      ],
      customStrategyNote: parsed.customStrategyNote || `FleetMind AI will learn ${data.city}'s unique traffic choke points and ride demand curves to systematically eliminate uncompensated deadhead miles.`
    };
  } catch (err) {
    console.error("POC Eval error:", err);
    return {
      feasibilityScore: 94,
      estimatedEmptyKmReduction: "29% - 37%",
      monthlyRevenueUpside: `$${Math.round(data.fleetSize * 1400).toLocaleString()}`,
      aiTrainingDaysRequired: 6,
      recommendedDeploymentPhases: [
        "Historical Dispatch Log Ingestion",
        "Shadow AI Dispatch Simulator",
        "Surge Predictive Pre-positioning",
        "Live Autonomous Matching"
      ],
      customStrategyNote: `FleetMind will ingest historical ride logs to train a predictive model customized for your fleet size of ${data.fleetSize}, cutting deadhead runs and increasing vehicle yield per hour.`
    };
  }
};
