class DateUtils {
  static getFormattedToday(): string {
    const currentDate: Date = new Date();
    const currentFormatedDate = currentDate
      .toLocaleString("pt-BR", {
        day: "numeric",
        month: "long",
        year: "numeric",
        weekday: "short",
      })
      .toString();

    return (
      currentFormatedDate.charAt(0).toUpperCase() + currentFormatedDate.slice(1)
    );
  }
}

export default DateUtils;
