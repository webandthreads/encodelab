/*
 * Consent Page
 *
 * Consent Information Details
 */
import React from 'react';
import { Alert } from 'react-bootstrap';

import Wrapper from './Wrapper';
import Breadcrump from '../../components/Breadcrump';

const links = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Consent Information',
    url: '/consent',
  },
];

export default function ContactPage() {
  return (
    <Wrapper>
      <Breadcrump links={links} />
      <section className="padding-35px-tb">
        <div className="container">
          <div className="row">
            <div className="col-12 blog-details-text last-paragraph-no-margin">
              <p>
                TESTING.....
                <Alert variant="warning">
                  This is a warning alert—check it out!
                </Alert>
                <h5 className="center">
                  Consent to Participate in a Research Study
                  <br />
                  University of Cape Town
                </h5>
                Thank you for taking the time to participate in my study. This
                study is being conducted as part of my master’s degree in the
                Psychology department at the University of Cape Town. It will
                measure your ability to sort household objects into different
                categories. Before agreeing to participate, please read the
                following carefully:
              </p>
              <p>
                <strong className="text-extra-dark-gray">
                  Why am I doing this study?
                </strong>
                <br />
                This study investigates the abilities of different age groups to
                sort household objects into different categories. This research
                investigates how aging influences people’s ability to sort
                objects into different categories, and whether aging can
                negatively influence a person’s processing of household object
                categories, such as grocery items.
              </p>
              <p>
                <strong className="text-extra-dark-gray">
                  What will I be asked to do if I participate in this study?
                </strong>
                <br />
                If you choose to take part, you will first complete an online
                questionnaire about your mood. Then, you will watch a short
                video. Next, you will complete a basic computer task which is a
                simulation of packing grocery items into a bag. Next, you will
                fill in an online questionnaire about the task. Finally, you
                will fill out an online questionnaire about how often you use or
                buy the objects in the task. The whole study will take
                approximately 1 hour.
              </p>
              <p>
                <strong className="text-extra-dark-gray">
                  What are the risks?
                </strong>
                <br />
                There are no risks involved in taking part in this study that
                you would not encounter in your everyday life.
              </p>
              <p>
                <strong className="text-extra-dark-gray">
                  What are the benefits?
                </strong>
                <br />
                You will receive 2 SRPP points in return for your participation
                in this study, which will be valid for the following courses
                once the SRPP requirement is reinstated upon return to campus in
                the future. Indirectly, you can also benefit by learning about
                the research process, and the knowledge that you have helped
                contribute to the body of research on ageing.
              </p>
              <p>
                <strong className="text-extra-dark-gray">
                  Who will participate in the study?
                </strong>
                <br />
                Approximately 44 undergraduate students from the university of
                Cape Town.
              </p>
              <p>
                <strong className="text-extra-dark-gray">
                  What are my rights as a participant?
                </strong>
                <br />
                Your participation in the study is voluntary. You may stop
                taking part in this study at any point, and there will be no
                punishment. You do not have to give anyone a reason for your
                withdrawal. You are not being forced to participate in this
                study. If you feel emotionally upset during any point of this
                study, please feel free to discontinue. Your response time data
                will not be available to anybody, aside from the researchers, as
                the computer will anonymously record your responses according to
                your participant number. Your identity is not attached to your
                responses. If you would like to know more about your rights as a
                participant, you may contact Ms Rosalind Adams: 021 650 3417 or
                rosalind.adams@uct.ac.za.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
