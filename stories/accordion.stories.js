import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Accordion from '../components/Accordion';
import animationNote from './notes/accordionAnimation.md';

const folds = [
  {
    id: 'royalGuards',
    title: "Emperor's Royal Guards",
    text:
      "The Emperor's Royal Guard, sometimes referred to as the Imperial Royal Guard or Imperial Guard, was an elite unit of the Galactic Empire's armed forces (specifically the Stormtrooper Corps) tasked with the protection of the Emperor, Palpatine. Palpatine was almost never seen without a detachment of Royal Guards at his side, so much that they usually accompanied him to his bed chambers and his office within the Death Star. The exact number of Royal Guardsmen serving the Emperor was unknown, with speculations ranging from less than fifty to tens of thousands, although their numbers were estimated to be at least four hundred at any one point. Like the stormtroopers of the Stormtrooper Corps, the Royal Guards formed a military unit independent of the Imperial Military and answered directly to the Emperor."
  },
  {
    id: 'tionne',
    title: 'Tionne',
    text:
      "Tionne Solusar was a female Human from the planet Rindao and a Jedi Master. A scholar of Jedi history, Tionne was one of the first students of Luke Skywalker's New Jedi Order and was almost entirely responsible for regathering the lost knowledge of the Old Jedi Order. She was involved in many important events to face the order, including the Yuuzhan Vong War, and often acted as a protector for the generation of younger Jedi Knights."
  },
  {
    id: 'biggs',
    title: 'Biggs Darklighter',
    text:
      'Biggs Darklighter was a human male pilot who fought for the Alliance to Restore the Republic during the early days of the Galactic Civil War. He grew up on the desert world of Tatooine, where he became a close boyhood friend of Luke Skywalker. The two became pilots and dreamed of leaving Tatooine. Darklighter left his homeworld for the Imperial Academy, but defected from the Galactic Empire after graduation in order to join the Rebel Alliance. He returned to Tatooine one final time to tell Skywalker of his plans.'
  },
  {
    id: 'maraJade',
    title: 'Mara Jade',
    text:
      "Mara Jade Skywalker was, during different times in her life, an Emperor's Hand, a smuggler, and later a Jedi Master who sat upon the Jedi High Council. She was raised as a servant and assassin to Emperor Palpatine and became a high-level Force-using operative. As an Emperor's Hand, Jade carried out the Emperor's bidding, killing Rebels and corrupt Imperials alike with cold professionalism, even as a young woman. As Palpatine's assassin, she received top-notch training from experts in a variety of fields as well as training in the Force, which was continued by Luke Skywalker years later. After Palpatine's death, she received his last command, which was to kill Luke Skywalker; however, the death of her Master caused her to go rogue. Eventually she joined smuggler chief Talon Karrde, becoming one of his best smugglers and his second-in-command. During the predations of Grand Admiral Thrawn, she was forced to work with Skywalker, and developed a grudging respect for him. During the Galactic Civil War, Mara Jade proved herself skilled in a variety of fields; she was a good pilot and mechanic and trained in the use of both a blaster and hand-to-hand combat even without relying on the Force."
  }
];

const stories = storiesOf('Accordion', module);
stories.add('basic', () => <Accordion folds={folds} />, {
  notes: { markdown: animationNote }
});
