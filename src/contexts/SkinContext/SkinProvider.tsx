import React, { useState, useEffect } from "react";

export type Skin =
  | "skin1"
  | "skin2"
  | "skin3"
  | "skin4"
  | "skin5"
  | "skin6"
  | "skin7"
  | "skin8";

type SkinContextType = {
  currentSkin: Skin;
  setCurrentSkin: (skin: Skin) => void;
};

export const SkinContext = React.createContext<SkinContextType>({
  currentSkin: "skin1",
  setCurrentSkin: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const SkinProvider: React.FC<Props> = ({ children }) => {
  const defaultSkin = localStorage.getItem("skin") as Skin | null;
  const [currentSkin, setCurrentSkin] = useState<Skin>(defaultSkin || "skin1");

  const updateCurrentSkin = (skin: Skin) => {
    document.body.classList.remove(currentSkin);
    setCurrentSkin(skin);
    document.body.classList.add(skin);
    localStorage.setItem("skin", skin);
  };

  useEffect(() => {
    document.body.classList.add(currentSkin);

    localStorage.setItem("skin", currentSkin);

    return () => {
      document.body.classList.remove(currentSkin);
    };
  }, [currentSkin]);

  return (
    <SkinContext.Provider
      value={{ currentSkin, setCurrentSkin: updateCurrentSkin }}
    >
      {children}
    </SkinContext.Provider>
  );
};

export default SkinProvider;
