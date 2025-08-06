import {
  Bricolage_Grotesque,
  DM_Sans,
  Manrope,
  Michroma,
  Quicksand,
  VT323,
} from "next/font/google";

const bricolage_grotesque_init = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
});

const manrope_init = Manrope({
  subsets: ["latin"],
  display: "swap",
});

const michroma_init = Michroma({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const dm_sans_init = DM_Sans({
  subsets: ["latin"],
  display: "swap",
});

const edu_init = VT323({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});
const quick_init = Quicksand({
  subsets: ["latin"],
  display: "swap",
  weight: "400"
});

export const bricolage_grotesque = bricolage_grotesque_init.className;
export const manrope = manrope_init.className;
export const michorma = michroma_init.className;
export const sans = dm_sans_init.className;
export const edu = edu_init.className;
export const quick = quick_init.className;
