import React, { Component } from 'react';
import RuleRow from './RuleRow';
import './ScoreTable.css';
import { ones, twos, threes, fours, fives, sixes, threeOfKind, fourOfKind, fullHouse, smallStraight, largeStraight, yahtzee, chance } from './Rules';


class ScoreTable extends Component {

  getTotalScore() {
    const {scores} = this.props;

    let totalScore = 0;
    for (let key in scores) {
      if (scores[key]) totalScore += scores[key];
    }
    return totalScore
  }
  render() {
    const { scores, doScore } = this.props;

    return (
      <div className="ScoreTable">
        <section className="ScoreTable-section">
          <h2>Upper</h2>
          <table cellSpacing="0">
            <tbody>
              <RuleRow name="Ones" score={scores.ones} desc={ones.desc} doScore={evt => doScore("ones", ones.evalRoll)} />
              <RuleRow name="Twos" score={scores.twos} desc={twos.desc} doScore={evt => doScore("twos", twos.evalRoll)} />
              <RuleRow name="Threes" score={scores.threes} desc={threes.desc} doScore={evt => doScore("threes", threes.evalRoll)} />
              <RuleRow name="Fours" score={scores.fours} desc={fours.desc} doScore={evt => doScore("fours", fours.evalRoll)} />
              <RuleRow name="Fives" score={scores.fives} desc={fives.desc} doScore={evt => doScore("fives", fives.evalRoll)} />
              <RuleRow name="Sixes" score={scores.sixes} desc={sixes.desc} doScore={evt => doScore("sixes", sixes.evalRoll)} />
            </tbody>
          </table>
        </section>
        <section className="ScoreTable-section ScoreTable-section-lower">
          <h2>Lower</h2>
          <table cellSpacing="0">
            <tbody>
              <RuleRow name="Three of Kind" score={scores.threeOfKind} desc={threeOfKind.desc} doScore={evt => doScore("threeOfKind", threeOfKind.evalRoll)} />
              <RuleRow name="Four of Kind" score={scores.fourOfKind} desc={fourOfKind.desc} doScore={evt => doScore("fourOfKind", fourOfKind.evalRoll)} />
              <RuleRow name="Full House" score={scores.fullHouse} desc={fullHouse.desc} doScore={evt => doScore("fullHouse", fullHouse.evalRoll)} />
              <RuleRow name="Small Straight" score={scores.smallStraight} desc={smallStraight.desc} doScore={evt => doScore("smallStraight", smallStraight.evalRoll)} />
              <RuleRow name="Large Straight" score={scores.largeStraight} desc={largeStraight.desc} doScore={evt => doScore("largeStraight", largeStraight.evalRoll)} />
              <RuleRow name="Yahtzee" score={scores.yahtzee} desc={yahtzee.desc} doScore={evt => doScore("yahtzee", yahtzee.evalRoll)} />
              <RuleRow name="Chance" score={scores.chance} desc={chance.desc} doScore={evt => doScore("chance", chance.evalRoll)} />
            </tbody>
          </table>
        </section>
        <h2>TOTAL SCORE: {this.getTotalScore()}</h2>
      </div>
    )
  }
}

export default ScoreTable;