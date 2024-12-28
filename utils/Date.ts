// Convert date to first 3 letters of the day and the number of the day, if it's today return "Today"
export function formatDate(date: string) {
    const d = new Date(date);
    const today = new Date();

    if (d.toDateString() === today.toDateString()) {
        return 'Today';
    }

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return `${days[d.getDay()]} ${d.getDate()}`;
}

// Ajouter cette interface
export interface DayData {
    date: string;
    checked: boolean;
}

export interface Training {
    date: string;  // ISO string
}

// Exemple de données d'entraînement
export const trainings: Training[] = [
    { date: new Date().toISOString() }, // aujourd'hui
    { date: new Date(Date.now() - 86400000).toISOString() }, // hier
    { date: new Date(Date.now() - 86400000 * 2).toISOString() }, // avant-hier
];

// Ajouter cette fonction pour générer les fausses données
export function generateFakeDays(): DayData[] {
    const days: DayData[] = [];
    for (let i = -7; i <= 7; i++) {
        const date = new Date();
        date.setDate(date.getDate() + i);
        const isoDate = date.toISOString();

        // Vérifie si la date existe dans trainings
        const isChecked = trainings.some(training =>
            new Date(training.date).toDateString() === new Date(isoDate).toDateString()
        );

        days.push({
            date: isoDate,
            checked: isChecked
        });
    }
    return days;
}
