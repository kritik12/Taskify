export const formatDate = (date) => {
    // Get the month, day, and year
    const month = date.toLocaleString("en-US", { month: "short" });
    const day = date.getDate();
    const year = date.getFullYear();

    const formattedDate = `${day}-${month}-${year}`;

    return formattedDate;
};

export function dateFormatter(dateString) {
    const inputDate = new Date(dateString);

    if (isNaN(inputDate)) {
        return "Invalid Date";
    }

    const year = inputDate.getFullYear();
    const month = String(inputDate.getMonth() + 1).padStart(2, "0");
    const day = String(inputDate.getDate()).padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
};

export function getInitials(fullName) {
    if (typeof fullName !== "string" || !fullName) {
      return ""; // Return an empty string or a default value
    }

    // Split the fullName into an array of words
    const names = fullName.split(" ");

    // Map the first letters of the first two words to uppercase
    const initials = names.slice(0, 2).map((name) => {
      // Check if the name is a non-empty string before accessing the first character
      return name && name[0] ? name[0].toUpperCase() : "";
    });

    // Join the initials into a single string
    const initialsStr = initials.join("");

    return initialsStr;
}

export const PRIOTITYSTYLES = {
    high: "text-red-600",
    medium: "text-yellow-600",
    low: "text-blue-600",
};

export const TASK_TYPE = {
    todo: "bg-blue-600",
    "in progress": "bg-yellow-600",
    completed: "bg-green-600",
};

export const BGS = [
    "bg-blue-600",
    "bg-yellow-600",
    "bg-red-600",
    "bg-green-600",
];