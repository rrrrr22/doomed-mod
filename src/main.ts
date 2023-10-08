import type { EntityType } from "isaac-typescript-definitions";
import { ModCallback } from "isaac-typescript-definitions";

const MOD_NAME = "doomed-mod";

export function main(): void {
  const mod = RegisterMod(MOD_NAME, 1);
  const NIGHTMARES_GAZE: EntityType =
    Isaac.GetEntityTypeByName("NightmaresGaze");

  mod.AddCallback(
    ModCallback.POST_NPC_UPDATE,
    nightmareGazeAI,
    NIGHTMARES_GAZE,
  );
}

function nightmareGazeAI(NPC: EntityType) {}
