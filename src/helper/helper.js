export function GeTMonthName(month) {
    switch (month) {
        case 0:
            return "Jan";
        case 1:
            return "Feb";
        case 2:
            return "Mar";
        case 3:
            return "Apr";
        case 4:
            return "May";
        case 5:
            return "Jun";
        case 6:
            return "Jul";
        case 7:
            return "Aug";
        case 8:
            return "Sep";
        case 9:
            return "Oct";
        case 10:
            return "Nov";
        default:
            return "Dec"
    }
}

export function GetSemesterId(semester) {
    semester = semester.toLowerCase();
    switch (semester) {
        case "first semester":
            return "SEMESTER_1";
        case "second semester":
            return "SEMESTER_2";
        case "third semester":
            return "SEMESTER_3";
        case "forth semester":
            return "SEMESTER_4";
        case "fifth semester":
            return "SEMESTER_5";
        case "sixth semester":
            return "SEMESTER_6";
        case "seventh semester":
            return "SEMESTER_7";
        case "eighth semester":
            return "SEMESTER_8";
        default:
            return "not_available";
    }
}

export function GetCourseId(course) {
    course = course.toLowerCase();
    switch (course) {
        case "english communication":
            return "E101";
        case "introduction to computing":
            return "IC102";
        case "basic electronics":
            return "BE103";
        case "islamic studies":
            return "IS104";
        case "Programming Fundamentals":
            return "PF105";
        case "Calculus & Analytical Geometry":
            return "CAG106";
    }
}

// export function getSemesterfromId(semesterId) {
//     switch (semesterId) {
//         case "SEMESTER_1":
//             return "First Semester";
//         case "SEMESTER_2":
//             return "Second Semester";
//         case "SEMESTER_3":
//             return "Third Semester";
//         case "SEMESTER_4":
//             return "Forth Semester";
//         case "SEMESTER_5":
//             return "Fifth Semester"
//     }
// }