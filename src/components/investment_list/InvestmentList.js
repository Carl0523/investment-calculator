import emptyList from "../../assets/empty_list.png";
import "./InvestmentList.css";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
function InvestmentList(props) {
  const savingList = [];

  let content = (
    <div className="empty-list">
      <img src={emptyList} alt="Empty List" />
      <h2>Fill the form and calculate the investment for you!</h2>
    </div>
  );

  if (props.data) {
    let currSaving = +props.data.currentSaving;
    const annualDeposit = +props.data.yearlySaving;
    const interestRate = +props.data.interestRate / 100;
    const duration = +props.data.savingDuration;

    let investedCapital = currSaving;

    let totalInterest = 0;

    for (let i = 0; i < duration; i++) {
      investedCapital += annualDeposit;
      const currInterest = currSaving * interestRate;
      totalInterest += currInterest;

      currSaving = investedCapital + totalInterest;

      //Year   total saving    interest(year)    Total interest     Invested Capital
      savingList.push({
        year: i + 1,
        interest: formatter.format(currInterest),
        totalInterest: formatter.format(totalInterest),
        currCapital: formatter.format(investedCapital),
        totalSaving: formatter.format(currSaving),
      });
    }
    content = (
      <table className="result">
        <thead>
          <tr>
            <th>YEAR</th>
            <th>TOTAL INTEREST CAPITAL</th>
            <th>INTEREST (YEAR)</th>
            <th>TOTAL INTEREST</th>
            <th>TOTAL SAVINGS</th>
          </tr>
          {savingList.map((annualSaving) => {
            return (
              <tr key={annualSaving.year}>
                <td>{annualSaving.year}</td>
                <td>{annualSaving.currCapital}</td>
                <td>{annualSaving.interest}</td>
                <td>{annualSaving.totalInterest}</td>
                <td>{annualSaving.totalSaving}</td>
              </tr>
            );
          })}
        </thead>
      </table>
    );
  }

  return content;
}

export default InvestmentList;
