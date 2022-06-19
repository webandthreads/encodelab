import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

export default class ResultsModal extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
    };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  close() {
    this.setState({ showModal: false });
    this.props.onClose();
    // redirect to participate page
    this.props.history.push('/participate');
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    return (
      <Modal
        show={this.state.showModal}
        onHide={this.close}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Body>
          <div className="container">
            <div className="row">
              <div className="col-12 blog-details-text last-paragraph-no-margin">
                <h6 className="center">
                  Debriefing Form
                  <br />
                  University of Cape Town
                </h6>
                <p>
                  Thank you for taking the time to participate in my study. The
                  true purpose of this study was actually to investigate your
                  memory for who put each item into the shopping bag after
                  exposure to an emotional video.
                </p>
                <p>
                  <strong className="text-extra-dark-gray">
                    Aim of this research:
                  </strong>
                  <br />
                  Your consent form told you that this study is investigating
                  the abilities of different age groups to sort household
                  objects into different categories. It also stated that this
                  study investigates how aging influences people’s ability to
                  sort objects into different categories, and whether aging can
                  negatively influence a person’s processing of household object
                  categories, such as grocery items.
                  <br />
                  <br />
                  In this study, I wanted to see if the sad/neutral video you
                  watched had an effect on your ability to remember who put each
                  of the items into the shopping bags. Some new research has
                  shown that emotions may help people with Alzheimer’s Disease
                  remember more details. Thus, your data will form the baseline
                  study to see if this procedure of exposure to emotional
                  material can help patients with AD remember more details.
                  <br />
                  <br />
                  What you did not know is that we were investigating how
                  accurately you were able to remember who put each item into
                  the bag. This is called “self-referential” memory, because we
                  wanted to see if your memory was stronger for yourself,
                  compared to your memory for the self and stranger categories,
                  even when all the other conditions were the same.
                </p>
                <p>
                  <strong className="text-extra-dark-gray">
                    Why deception was used:?
                  </strong>
                  <br />
                  This process of slight deception was necessary because if you
                  had been aware that you were being tested on self-referential
                  memory, you may have intentionally or unintentionally paid
                  more attention to your own items in the task. Furthermore,
                  because it is a test of implicit memory (which is memory that
                  you make without meaning to), the fact that it is a memory
                  task needs to be revealed only at the end. The deception used
                  does not create additional risk for participants, as it is a
                  minor deception about the purpose of the task.
                  <br />
                  <br />
                  I, <strong>{this.props.fullname}</strong>, have read and
                  understood what is written on this page, and by signing here,
                  I acknowledge that I am aware of the true purpose of this
                  research.
                </p>
                <p>
                  For further information, feel free to contact the researcher,
                  Nicole McIver: MCVNIC001@myuct.ac.za.
                  <br />
                  <br />
                  You can also contact my supervisor, Dr. Progress Njomboro:
                  progress.njomboro@uct.ac.za. If you have any questions about
                  your rights as a participant, please Ms. Rosalind Adams: 021
                  650 3417 or rosalind.adams@uct.ac.za.
                </p>
                <p>
                  Should you feel the need for emotional or mental support, feel
                  free to contact the Student Wellness Centre at any time: 021
                  650 1017, or the South African Depression and Anxiety Group to
                  contact on online counsellor:
                  <a
                    href="http://www.sadag.org/index.php?option=com_content&view=article&id=2920&Itemid=424"
                    target="_new"
                  >
                    http://www.sadag.org/index.php?option=com_content&view=article&id=2920&Itemid=424
                  </a>
                </p>
                <Button variant="success" onClick={this.close}>
                  Close
                </Button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}

ResultsModal.propTypes = {
  onClose: PropTypes.func,
  fullname: PropTypes.string,
  history: PropTypes.object,
};
