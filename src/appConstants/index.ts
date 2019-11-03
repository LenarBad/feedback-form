export enum Rating {
    VERY_SATISFIED = '5',
    SOMEWHAT_SATISFIED = '4',
    NEITHER_SATISFIED_NOR_DISSATISFIED = '3',
    SOMEWHAT_DISSATISFIED = '1',
    VERY_DISSATISFIED = '0'
}

const RatingText = {
    [Rating.VERY_SATISFIED.toString()]: 'Very Satisfied',
    [Rating.SOMEWHAT_SATISFIED.toString()]: 'Somewhat Satisfied',
    [Rating.NEITHER_SATISFIED_NOR_DISSATISFIED.toString()]: 'Neither Satisfied nor Dissatisfied',
    [Rating.SOMEWHAT_DISSATISFIED.toString()]: 'Somewhat Dissatisfied',
    [Rating.VERY_DISSATISFIED.toString()]: 'Very Dissatisfied',
};

export function RatingToText(rating: Rating): string {
    return RatingText[rating];
}

export function hasMinRating(rating: Rating, target: Rating): boolean {
    return target <= rating;
}

export enum UsaState {
    ALABAMA = 'Alabama',
    ALASKA = 'Alaska',
    ARIZONA = 'Arizona',
    ARKANSAS = 'Arkansas',
    CALIFORNIA = 'California',
    COLORADO = 'Colorado',
    CONNECTICUT = 'Connecticut',
    DELAWARE = 'Delaware',
    FLORIDA = 'Florida',
    GEORGIA = 'Georgia',
    HAWAII = 'Hawaii',
    IDAHO = 'Idaho',
    ILLINOISINDIANA = 'IllinoisIndiana',
    IOWA = 'Iowa',
    KANSAS = 'Kansas',
    KENTUCKY = 'Kentucky',
    LOUISIANA = 'Louisiana',
    MAINE = 'Maine',
    MARYLAND = 'Maryland',
    MASSACHUSETTS = 'Massachusetts',
    MICHIGAN = 'Michigan',
    MINNESOTA = 'Minnesota',
    MISSISSIPPI = 'Mississippi',
    MISSOURI = 'Missouri',
    MONTANANEBRASKA = 'MontanaNebraska',
    NEVADA = 'Nevada',
    NEW_HAMPSHIRE = 'New Hampshire',
    NEW_JERSEY = 'New Jersey',
    NEW_MEXICO = 'New Mexico',
    NEW_YORK = 'New York',
    NORTH_CAROLINA = 'North Carolina',
    NORTH_DAKOTA = 'North Dakota',
    OHIO = 'Ohio',
    OKLAHOMA = 'Oklahoma',
    OREGON = 'Oregon',
    PENNSYLVANIA = 'Pennsylvania',
    RHODE_ISLAND = 'Rhode Island',
    SOUTH_CAROLINA = 'South Carolina',
    SOUTH_DAKOTA = 'South Dakota',
    TENNESSEE = 'Tennessee',
    TEXAS = 'Texas',
    UTAH = 'Utah',
    VERMONT = 'Vermont',
    VIRGINIA = 'Virginia',
    WASHINGTON = 'Washington',
    WEST_VIRGINIA = 'West Virginia',
    WISCONSIN = 'Wisconsin',
    WYOMING = 'Wyoming',
}





