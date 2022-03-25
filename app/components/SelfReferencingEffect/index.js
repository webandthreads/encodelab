import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

import RecallStage from './RecallStage';
import ResultsModal from './ResultsModal';

import Associator from './Associator';
import AnxietyScreening from './AnxietyScreening';
import ConsentCheck from '../ConsentCheck';
import DemographicInformation from './DemographicInfomation';
import DepressionScreening from './DepressionScreening';
import Distractor from './Distractor';
import EmotionInductor from './EmotionInductor';
import Encode from './encode/Encode';

export default class SelfReferencingEffect extends React.Component {
  constructor() {
    super();

    this.state = {
      itemsLeft: 0,
      fullname: '',
      age: '',
      nationality: '',
      gender: '',
      prescribedGlasses: '',
      wearGlasses: '',
      device: '',
      makeAndModel: '',
      studentNumber: '',
      course: '',
      anxietyScreeningResponses: [],
      depressionScreeningResponses: [],
      emotionReadings: [],
      recallAnswers: [],
    };

    this.consentCheck = React.createRef();
    this.demographicInformation = React.createRef();
    this.anxietyScreening = React.createRef();
    this.depressionScreening = React.createRef();
    this.associator = React.createRef();
    this.emotionInductor = React.createRef();
    this.encoder = React.createRef();
    this.distractor = React.createRef();

    this.consentGranted = this.consentGranted.bind(this);
    this.onDemographicInformationReturned = this.onDemographicInformationReturned.bind(
      this,
    );
    this.anxietyScreeningQuestionsAnswered = this.anxietyScreeningQuestionsAnswered.bind(
      this,
    );
    this.depressionScreeningQuestionsAnswered = this.depressionScreeningQuestionsAnswered.bind(
      this,
    );
    this.associationComplete = this.associationComplete.bind(this);
    this.emotionInductionComplete = this.emotionInductionComplete.bind(this);
    this.complete = this.complete.bind(this);
    this.openDistractor = this.openDistractor.bind(this);
    this.closeDistractor = this.closeDistractor.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.itemsLeft = this.itemsLeft.bind(this);

    this.recallModal = React.createRef();
    this.resultsModal = React.createRef();

    this.onRecallComplete = this.onRecallComplete.bind(this);
    this.onResultsModalClose = this.onResultsModalClose.bind(this);
  }

  componentDidMount() {
    this.setState({ itemsLeft: this.props.items.length });
  }

  consentGranted(fullname) {
    this.setState({ fullname });
    this.demographicInformation.current.open();
  }

  onDemographicInformationReturned(information) {
    const {
      age,
      nationality,
      gender,
      prescribedGlasses,
      wearGlasses,
      device,
      makeAndModel,
      studentNumber,
      course,
    } = information;
    this.setState({
      age,
      nationality,
      gender,
      prescribedGlasses,
      wearGlasses,
      device,
      makeAndModel,
      studentNumber,
      course,
    });

    // this.setState({ ...information });
    this.depressionScreening.current.open();
  }

  anxietyScreeningQuestionsAnswered(answers) {
    this.anxietyScreening.current.close();
    this.setState({ anxietyScreeningResponses: answers });
    this.emotionInductor.current.open();
  }

  depressionScreeningQuestionsAnswered(answers) {
    this.depressionScreening.current.close();
    this.setState({ depressionScreeningResponses: answers });
    this.anxietyScreening.current.open();
  }

  associationComplete() {
    this.associator.current.close();
  }

  emotionInductionComplete(readings) {
    this.emotionInductor.current.close();
    this.setState({ emotionReadings: readings });
    this.associator.current.open();
  }

  itemsLeft(itemsLeft) {
    this.setState({ itemsLeft });
  }

  openDistractor() {
    // this.distractor.current.open();
    this.recallModal.current.open();
  }

  closeDistractor() {
    this.distractor.current.close();
    this.recallModal.current.open();
  }

  onRecallComplete(recallAnswers) {
    this.setState({ recallAnswers });
    this.recallModal.current.close();

    this.resultsModal.current.open();
  }

  onResultsModalClose() {
    this.complete();
  }

  complete() {
    const {
      fullname,
      age,
      nationality,
      gender,
      prescribedGlasses,
      wearGlasses,
      device,
      makeAndModel,
      studentNumber,
      course,
    } = this.state;
    this.props.onComplete({
      participant: {
        fullname: this.state.fullname,
        age: this.state.age,
        nationality: this.state.nationality,
        gender: this.state.gender,
        prescribedGlasses: this.state.prescribedGlasses,
        wearGlasses: this.state.wearGlasses,
        device: this.state.device,
        makeAndModel: this.state.makeAndModel,
        studentNumber: this.state.studentNumber,
        course: this.state.course,
      },
      depressionScreeningResponses: this.state.depressionScreeningResponses,
      anxietyScreeningResponses: this.state.anxietyScreeningResponses,
      emotionReadings: this.state.emotionReadings,
      emotionType: this.props.emotionType,
      recallAnswers: this.state.recallAnswers,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <DndProvider backend={HTML5Backend}>
            <p style={{ fontSize: 18 }}>
              Imagine that you, your best friend, and a stranger have gone
              grocery shopping together. Once on your way out, you decide to
              organise all the groceries you bought into your shopping baskets. You
              each have bought about {Math.round(this.props.items.length / 4)} 
              items. This computer game is going to display the name of various
              grocery items on the left. You are to drag items into fitting shopping
              baskets on the right. There is no time limit. <strong>Proceed to Test </strong> 
               when you are done.
            </p>
            <p>
              <Button onClick={this.openDistractor} disabled={this.state.itemsLeft !== 0}>Proceed to Test</Button>
              <span style={{ fontSize: 16 }}>&nbsp;&nbsp;{this.state.itemsLeft} Items left</span>
            </p>
            <Encode
              ref={this.encoder}
              items={this.props.items}
              baskets={this.props.baskets}
              itemsLeft={this.itemsLeft}
            />
            <ConsentCheck
              onContinue={this.consentGranted}
              ref={this.consentCheck}
            />
            <DemographicInformation
              ref={this.demographicInformation}
              fullname={this.state.fullname}
              onContinue={this.onDemographicInformationReturned}
            />
            <AnxietyScreening
              ref={this.anxietyScreening}
              questions={this.props.anxietyScreeningQuestions}
              onComplete={this.anxietyScreeningQuestionsAnswered}
            />
            <DepressionScreening
              ref={this.depressionScreening}
              questions={this.props.depressionScreeningQuestions}
              onComplete={this.depressionScreeningQuestionsAnswered}
            />
            <EmotionInductor
              videoOptions={this.props.videoOptions}
              ref={this.emotionInductor}
              onComplete={this.emotionInductionComplete}
            />
            <Associator
              ref={this.associator}
              fullname={this.state.fullname}
              baskets={this.props.associationBaskets}
              onComplete={this.associationComplete}
              numItems={Math.round(this.props.items.length/4)}
            />
            <Distractor
              ref={this.distractor}
              options={this.props.distractorVideoOptions}
              onComplete={this.closeDistractor}
            />
            <RecallStage
              items={this.props.items}
              ref={this.recallModal}
              onComplete={this.onRecallComplete}
            />
            <ResultsModal
              ref={this.resultsModal}
              onClose={this.onResultsModalClose}
              fullname={this.state.fullname}
            />
          </DndProvider>
        </div>
      </div>
    );
  }
}

SelfReferencingEffect.propTypes = {
  items: PropTypes.array,
  baskets: PropTypes.array,
  associationBaskets: PropTypes.array,
  anxietyScreeningQuestions: PropTypes.array,
  depressionScreeningQuestions: PropTypes.array,
  videoOptions: PropTypes.object,
  distractorVideoOptions: PropTypes.object,
  onComplete: PropTypes.func,
  emotionType: PropTypes.string,
};
