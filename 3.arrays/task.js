function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    return arr1.every((value, index) => value === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
    const filterUsers = users.filter(user => user.gender === gender);

    if (filterUsers.length === 0) {
        return 0;
    }

    const totalAge = filterUsers.reduce((sum, user) => sum + user.age, 0);
    const averageAge = totalAge / filterUsers.length;

    return averageAge;
}