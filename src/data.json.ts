export default {
  ghosts: [
    {
      type: "Banshee",
      clues: ["EMF Level 5", "Fingerprints", "Freezing Temperatures"],
      strengths: "Only targets one person at a time",
      weakness: "Fears the Crucifix. Less aggressive near one",
    },
    {
      type: "Spirit",
      clues: ["Ghost Writing", "Spirit Box", "Fingerprints"],
      strengths: "",
      weakness:
        "Smudge Sticks will stop it from attacking for a long period of time",
    },
    {
      type: "Jinn",
      clues: ["EMF Level 5", "Spirit Box", "Ghost Orb"],
      strengths: "Travels at a faster speed if victim is far away",
      weakness:
        "Turning off power source will prevent the Jinn from using its ability",
    },
    {
      type: "Revenant",
      clues: ["EMF Level 5", "Ghost Writing", "Fingerprints"],
      strengths: "Travels faster when hunting a victim",
      weakness: "Hiding from a Revenant causes it to move very slowly",
    },
    {
      type: "Shade",
      clues: ["EMF Level 5", "Ghost Writing", "Ghost Orb"],
      strengths: "Shy, making it difficult to locate",
      weakness: "Will not enter hunting mode with multiple people nearby",
    },
    {
      type: "Oni",
      clues: ["EMF Level 5", "Ghost Writing", "Spirit Box"],
      strengths: "Can move objects and are more active with people nearby",
      weakness: "Is easy to find and identify due to being very active",
    },
    {
      type: "Wraith",
      clues: ["Freezing Temperatures", "Spirit Box", "Fingerprints"],
      strengths: "Can't be tracked by footsteps",
      weakness: "Toxic reaction to salt. Effects similar to smudge",
    },
    {
      type: "Mare",
      clues: ["Freezing Temperatures", "Spirit Box", "Ghost Orb"],
      strengths: "Increased chance to attack in the dark",
      weakness: "Turning the lights on lowers its chance to attack",
    },
    {
      type: "Demon",
      clues: ["Freezing Temperatures", "Ghost Writing", "Spirit Box"],
      strengths: "Attacks more often than any other ghost",
      weakness:
        "Asking as Demon successful Ouija board questions won't lower your sanity",
    },
    {
      type: "Yurei",
      clues: ["Freezing Temperatures", "Ghost Orb", "Ghost Writing"],
      strengths: "Has a stronger effect on your sanity",
      weakness:
        "Using Smudge Sticks on a Yurei's room will prevent it from wandering for a long time",
    },
    {
      type: "Poltergeist",
      clues: ["Fingerprints", "Ghost Orb", "Spirit Box"],
      strengths: "Throws a huge amount of objects at once",
      weakness: "Ineffective in an empty room",
    },
    {
      type: "Phantom",
      clues: ["Freezing Temperatures", "EMF Level 5", "Ghost Orb"],
      strengths: "Sanity drops considerably when looking at a Phantom",
      weakness:
        "Taking a photo of a Phantom will make it temporarily disappear",
    },
  ],
  clues: [
    "EMF Level 5",
    "Fingerprints",
    "Freezing Temperatures",
    "Ghost Orb",
    "Ghost Writing",
    "Spirit Box",
  ],
};
