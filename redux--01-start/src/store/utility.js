const updateObject = (state, updatedValues) => {
	return {
		...state,
		...updatedValues
	}
}

export default updateObject