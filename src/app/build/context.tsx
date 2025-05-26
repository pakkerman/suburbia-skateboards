"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { Content } from "@prismicio/client";

type CustomizerControlContext = {
  selectedWheel?: Content.BoardCustomizerDocumentDataWheelsItem;
  setWheel: (wheel: Content.BoardCustomizerDocumentDataWheelsItem) => void;
  selectedDeck?: Content.BoardCustomizerDocumentDataDecksItem;
  setDeck: (Deck: Content.BoardCustomizerDocumentDataDecksItem) => void;
  selectedTruck?: Content.BoardCustomizerDocumentDataMetalsItem;
  setTruck: (Truck: Content.BoardCustomizerDocumentDataMetalsItem) => void;
  selectedBolt?: Content.BoardCustomizerDocumentDataMetalsItem;
  setBolt: (Bolt: Content.BoardCustomizerDocumentDataMetalsItem) => void;
};

const defaultContext: CustomizerControlContext = {
  setWheel: () => {},
  setDeck: () => {},
  setBolt: () => {},
  setTruck: () => {},
};

const CustomizerControlContext = createContext(defaultContext);

type CustomizerControlProviderProps = {
  defaultWheel: Content.BoardCustomizerDocumentDataWheelsItem;
  defaultDeck: Content.BoardCustomizerDocumentDataDecksItem;
  defaultTruck: Content.BoardCustomizerDocumentDataMetalsItem;
  defaultBolt: Content.BoardCustomizerDocumentDataMetalsItem;
  children?: React.ReactNode;
};

export function CustomizerControlProvider({
  children,
  defaultWheel,
  defaultDeck,
  defaultTruck,
  defaultBolt,
}: CustomizerControlProviderProps) {
  const [selectedWheel, setWheel] = useState(defaultWheel);
  const [selectedDeck, setDeck] = useState(defaultDeck);
  const [selectedTruck, setTruck] = useState(defaultTruck);
  const [selectedBolt, setBolt] = useState(defaultBolt);

  const value = useMemo<CustomizerControlContext>(() => {
    return {
      selectedWheel,
      setWheel,
      selectedDeck,
      setDeck,
      selectedTruck,
      setTruck,
      selectedBolt,
      setBolt,
    };
  }, [selectedWheel, selectedDeck, selectedTruck, selectedBolt]);

  return (
    <CustomizerControlContext.Provider value={value}>
      {children}
    </CustomizerControlContext.Provider>
  );
}

export function useCustomizer() {
  return useContext(CustomizerControlContext);
}
