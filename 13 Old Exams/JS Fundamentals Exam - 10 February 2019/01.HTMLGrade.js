function solution(studentExamPoints, completedHomeWorks, totalHomeWorks) {
    const maxPoints = 100;          // The maxPoints for the course are always 100.
    const maxExamPoints = 400;      // The maximum examPoints are 400.
    const examPoints = 90;         // The examPoints form 90% of the student`s totalPoints for the course.
    const bonus = 10;              // Bonus for homework, up to 10% if all of the homework is successfully completed trough the course.
    let grade = 0;

    if (maxExamPoints === studentExamPoints) {
        grade = 6;
    } else {
        const pointsWithoutBonus = (studentExamPoints / maxExamPoints) * examPoints;
        const bonusPoints = (completedHomeWorks / totalHomeWorks) * bonus;
        let totalPoints = pointsWithoutBonus + bonusPoints;
        grade = 3 + 2 * (totalPoints - (maxPoints / 5)) / (maxPoints / 2);

        if (grade < 3) {
            grade = Math.floor(grade);
        } else if (grade > 6) {
            grade = 6;
        }
    }

    console.log(grade.toFixed(2));
}

solution(200, 5, 5);