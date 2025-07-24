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

  static shortDate( d?: string):string | null {
    if (typeof(d) == "string"){
      return new Date(d)
      .toLocaleString("pt-BR", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
      })
      .toString();
    } else {return null}
      
    }
    
  }



export default DateUtils;
