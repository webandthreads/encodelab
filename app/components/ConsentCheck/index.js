import React from 'react';
import { Alert, Button, Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

export default class ConsentCheck extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: true,
      validated: false,
    };

    this.fullname = React.createRef();
    this.consentCheck = React.createRef();
    this.form = React.createRef();

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    const validated = this.form.current.checkValidity();
    if (validated) {
      this.props.onContinue(this.fullname.current.value);
      this.close();
    }

    this.setState({ validated: true });
  }

  render() {
    return (
      <div>
        <Modal
          show={this.state.showModal}
          onHide={this.close}
          backdrop="static"
          keyboard={false}
          centered
          dialogClassName="modal-75w"
        >
          <Modal.Body>
            <div className="container">
              <div className="row">
                <div className="col-12 blog-details-text last-paragraph-no-margin">
                  <Alert variant="warning" className="col-12">
                    Instructions:
                    <ul>
                      <li>
                        Please read the following Consent Form carefully (the
                        Click Continue with Participation).
                      </li>
                      <li>
                        Please complete this task on a laptop or PC computer
                        whilst seated in a quiet, distraction-free environment.
                        Please do not complete this task on a cellphone or
                        tablet.
                      </li>
                      <li>
                        There is audio in this task, so please make sure your
                        computers volume is turned up and that you have access
                        to your computer speakers or headphones.
                      </li>
                    </ul>
                  </Alert>
                  <h6 className="center">
                    Consent to Participate in a Research Study (2 SRPP points)
                    <br />
                    University of Cape Town
                  </h6>
                  <p>
                    Thank you for taking the time to participate in my study.
                    This study is being conducted as part of my master’s degree
                    in the Psychology department at the University of Cape Town.
                    It will measure your ability to sort household objects into
                    different categories. Before agreeing to participate, please
                    read the following carefully:
                  </p>
                  <p>
                    <strong className="text-extra-dark-gray">
                      Why am I doing this study?
                    </strong>
                    <br />
                    This study investigates the abilities of different age
                    groups to sort household objects into different categories.
                    This research investigates how aging influences people’s
                    ability to sort objects into different categories, and
                    whether aging can negatively influence a person’s processing
                    of household object categories, such as grocery items.
                  </p>
                  <p>
                    <strong className="text-extra-dark-gray">
                      What will I be asked to do if I participate in this study?
                    </strong>
                    <br />
                    If you choose to take part, you will first complete an
                    online questionnaire about your mood. Then, you will watch a
                    short video. Next, you will complete a basic computer task
                    which is a simulation of packing grocery items into a bag.
                    Next, you will fill in an online questionnaire about the
                    task. Finally, you will fill out an online questionnaire
                    about how often you use or buy the objects in the task. The
                    whole study will take approximately 1 hour.
                  </p>
                  <p>
                    <strong className="text-extra-dark-gray">
                      What are the risks?
                    </strong>
                    <br />
                    There are no risks involved in taking part in this study
                    that you would not encounter in your everyday life.
                  </p>
                  <p>
                    <strong className="text-extra-dark-gray">
                      What are the benefits?
                    </strong>
                    <br />
                    You will receive 2 SRPP points in return for your
                    participation in this study. Indirectly, you can also
                    benefit by learning about the research process, and the
                    knowledge that you have helped contribute to the body of
                    research on ageing.
                  </p>
                  <p>
                    <strong className="text-extra-dark-gray">
                      Who will participate in the study?
                    </strong>
                    <br />
                    Approximately 44 undergraduate students from the university
                    of Cape Town.
                  </p>
                  <Alert variant="warning" className="col-12">
                    Random clicks will mean that you will NOT get an SRPP point
                    for your participation in this experiment. You need to try
                    your best in each task, because a high error rate, as
                    indicated by careless clicking, will mean that you will not
                    be awarded points for this task, so try your best!
                  </Alert>
                  <p>
                    <strong className="text-extra-dark-gray">
                      What are my rights as a participant?
                    </strong>
                    <br />
                    Your participation in the study is voluntary. You may stop
                    taking part in this study at any point, and there will be no
                    punishment. You do not have to give anyone a reason for your
                    withdrawal. You are not being forced to participate in this
                    study. If you feel emotionally upset during any point of
                    this study, please feel free to discontinue. Your response
                    time data will not be available to anybody, aside from the
                    researchers, as the computer will anonymously record your
                    responses according to your participant number. Your
                    identity is not attached to your responses. If you would
                    like to know more about your rights as a participant, you
                    may contact Ms Rosalind Adams: 021 650 3417 or
                    rosalind.adams@uct.ac.za.
                  </p>
                  <p>
                    For further information, feel free to contact the
                    researcher, Nicole McIver: MCVNIC001@myuct.ac.za. You can
                    also contact the supervisor,Dr. Progress Njomboro:
                    progress.njomboro@uct.ac.za. <br />
                    Should you feel the need for emotional or mental support,
                    feel free to contact the Student Wellness Centre at any
                    time: 021 650 1017 between 8am-8pm Monday to Sunday.
                  </p>
                  <br />
                  <Form
                    noValidate
                    validated={this.state.validated}
                    ref={this.form}
                    onSubmit={this.handleSubmit}
                  >
                    <strong className="text-extra-dark-gray">
                      Informed Consent
                    </strong>
                    <br />
                    <Form.Group>
                      <Form.Label>Full name</Form.Label>
                      <Form.Control
                        required
                        placeholder="Fill in your Full name"
                        ref={this.fullname}
                      />
                    </Form.Group>
                    <Form.Check
                      required
                      ref={this.consentCheck}
                      label="I have read and understood what is written on this page, and I agree to take part in this study."
                      feedback="You must check consent to continue."
                    />
                    <Button variant="success" type="submit">
                      Continue with Participation
                    </Button>
                  </Form>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

ConsentCheck.propTypes = {
  onContinue: PropTypes.func,
};
