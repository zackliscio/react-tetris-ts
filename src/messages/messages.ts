const enMessages = {
  authorLabel: "Made by",
  authorEmoji: "👨‍💻",
  authorText: "Check me out at { link }",
  initialLevel: "Initial level",
  initialRows: "Initial rows",
  level: "Level",
  lightMode: "Light mode",
  next: "Next",
  play: "New game",
  resume: "Resume game",
  score: "Your score",
};

const csMessages = {
  authorLabel: "Vytvořeno",
  authorEmoji: "👨‍💻",
  authorText: "Můj profil { link }",
  initialLevel: "Vstupní úroveň",
  initialRows: "Vstupní řádky",
  level: "Úroveň",
  lightMode: "Tmavý režim",
  next: "Další",
  play: "Nová hra",
  resume: "Pokračovat",
  score: "Vaše skóre",
};

export const messages: Record<string, typeof enMessages> = {
  en: enMessages,
  cs: csMessages,
};
