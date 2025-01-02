import React, { createContext } from "react";
import { unitsTypes } from "./Units";

export interface CurrentUnitContextType {
    currentUnit: unitsTypes;
    setCurrentUnit: React.Dispatch<React.SetStateAction<unitsTypes>>;
 }

export const currentUnitContext = createContext<CurrentUnitContextType | undefined>(undefined);