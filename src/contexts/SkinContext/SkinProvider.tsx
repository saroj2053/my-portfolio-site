import React from "react";

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
  const [currentSkin, setCurrentSkin] = React.useState<Skin>("skin1");

  const updateCurrentSkin = (skin: Skin) => {
    document.body.classList.remove(currentSkin);
    setCurrentSkin(skin);
    document.body.classList.add(skin);
  };

  return (
    <SkinContext.Provider
      value={{ currentSkin, setCurrentSkin: updateCurrentSkin }}
    >
      {children}
    </SkinContext.Provider>
  );
};

export default SkinProvider;
