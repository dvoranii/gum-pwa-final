export const getCombinationKey = (embrasure, motivation, condition) => {
    const embrasureKey = embrasure ? `E${embrasure.replace('embrasure', "")}` : '';
    const motivationKey = motivation === 'motivated' ? "Mot" : motivation === 'unmotivated' ? 'UnMot' : "";
    let conditionKey = "";
    if (condition === "periodontal")
        conditionKey = "Perio";
    else if (condition === "appliance")
        conditionKey = "Impt";
    else if (condition === "orthodontic")
        conditionKey = "Ortho";
    return `${embrasureKey}:${motivationKey}${conditionKey ? ':' + conditionKey : ""}`;
};
