
export const initialSkills = []

const ADD = "ADD";
const CLEAR = "CLEAR"


export function skillsReducer(state, action) {
    switch (action.type) {
        case ADD:
            return [...state, action.payload.skill]
        case CLEAR:
            return initialSkills
        default:
            return state;
    }
}

export function addSkillAction(name, year) {
    return {
        type: ADD,
        payload: {
            skill: {
                "name": name,
                "year": year
            }
        }
    }
};


export function clearSkillsAction() {
    return {
        type: CLEAR
    };
}