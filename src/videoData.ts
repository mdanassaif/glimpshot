import multiavatar from '@multiavatar/multiavatar';

// Helper function to convert SVG to Base64
const toBase64 = (str: string) => {
  return `data:image/svg+xml;base64,${Buffer.from(str).toString('base64')}`;
};

export const videos = [
  { 
    id: 'unique-id-1',
    videoUrl: 'video26.mp4', 
    title: 'Aaj To sunday hai yay yay', 
    username: 'viralVideo', 
    avatarUrl: toBase64(multiavatar('sundayFood')),  
    likes: 0, 
    dislikes: 0 
  },
  { 
    id: 'unique-id-2',
    videoUrl: 'video1.mp4', 
    title: 'When dragons are never caged', 
    username: 'MovieLover', 
    avatarUrl: toBase64(multiavatar('houseOfDragon')), // Updated to use multiavatar
    likes: 0, 
    dislikes: 0 
  },
  { 
    id: 'unique-id-3',
    videoUrl: 'video2.mp4', 
    title: 'Aage kya Karna hai ?', 
    username: 'TVF', 
    avatarUrl: toBase64(multiavatar('kotaFactory')), // Updated to use multiavatar
    likes: 0, 
    dislikes: 0 
  },

  { 
    id: 'unique-id-5',
    videoUrl: 'video4.mp4', 
    title: 'found My bestie childhood video', 
    username: 'viralVideo', 
    avatarUrl: toBase64(multiavatar('childhoodMemory')), // Updated to use multiavatar
    likes: 0, 
    dislikes: 0 
  },

  { 
    id: 'unique-id-7',
    videoUrl: 'video6.mp4', 
    title: 'Mote hai to kya, artist hai', 
    username: 'WeirdArtists', 
    avatarUrl: toBase64(multiavatar('fat')), // Updated to use multiavatar
    likes: 0, 
    dislikes: 0 
  },

  { 
    id: 'unique-id-8',
    videoUrl: 'video7.mp4', 
    title: 'Take a breath....', 
    username: 'fullMotivation', 
    avatarUrl: toBase64(multiavatar('fullMotivation')), // Updated to use multiavatar
    likes: 0, 
    dislikes: 0 
  },

  { 
    id: 'unique-id-4',
    videoUrl: 'video3.mp4', 
    title: 'Cheezo ke peeche mat bhago', 
    username: 'lifeLessons', 
    avatarUrl: toBase64(multiavatar('lifeLessons')), // Updated to use multiavatar
    likes: 0, 
    dislikes: 0 
  },
  { 
    id: 'unique-id-6',
    videoUrl: 'video5.mp4', 
    title: 'Mah Mah Mah', 
    username: 'viralVideo', 
    avatarUrl: toBase64(multiavatar('aajkalKeBache')), // Updated to use multiavatar
    likes: 0, 
    dislikes: 0 
  },
  { 
    id: 'unique-id-9',
    videoUrl: 'video8.mp4', 
    title: 'Couple must spend time together.', 
    username: 'LoveTips', 
    avatarUrl: toBase64(multiavatar('LoveTips')), // Updated to use multiavatar
    likes: 0, 
    dislikes: 0 
  },
  { 
    id: 'unique-id-10',
    videoUrl: 'video9.mp4', 
    title: 'My Dream setup :)', 
    username: 'codingHub', 
    avatarUrl: '/avatar2.png',
    likes: 0, 
    dislikes: 0 
  },
  { 
    id: 'unique-id-11',
    videoUrl: 'video10.mp4', 
    title: 'Artist live Out of the box', 
    username: 'WeirdArtists', 
    avatarUrl: toBase64(multiavatar('artofThings')), // Updated to use multiavatar
    likes: 0, 
    dislikes: 0 
  },
  { 
    id: 'unique-id-12',
    videoUrl: 'video11.mp4', 
    title: 'When Beatboxer friends meet', 
    username: 'MusicLover', 
    avatarUrl: toBase64(multiavatar('BeatBoxers')), // Updated to use multiavatar
    likes: 0, 
    dislikes: 0 
  },

  { 
    id: 'unique-id-14',
    videoUrl: 'video13.mp4', 
    title: 'Pyaar mein jhagde chess ki trah', 
    username: 'poetryLover', 
    avatarUrl: toBase64(multiavatar('loveExplained')), // Updated to use multiavatar
    likes: 0, 
    dislikes: 0 
  },
  { 
    id: 'unique-id-15',
    videoUrl: 'video14.mp4', 
    title: 'When Alan becker write an email', 
    username: 'alanbecker', 
    avatarUrl: '/alanbecker.jpg', // Updated to use multiavatar
    likes: 0, 
    dislikes: 0 
  },
  { 
    id: 'unique-id-16',
    videoUrl: 'video15.mp4', 
    title: 'Cutest glummy smile', 
    username: 'cutekids', 
    avatarUrl: toBase64(multiavatar('cutekids')), // Updated to use multiavatar
    likes: 0, 
    dislikes: 0 
  },
  { 
    id: 'unique-id-40',
    videoUrl: 'video40.mp4', 
    title: "Easy to learn coding on sololearn", 
    username: 'sololearn', 
    avatarUrl: '/sololearn.png', // Updated to use multiavatar
    likes: 0, 
    dislikes: 0 
  },
  { 
    id: 'unique-id-17',
    videoUrl: 'video16.mp4', 
    title: 'A love song for goat', 
    username: 'MusicLover', 
    avatarUrl: toBase64(multiavatar('goat')), // Updated to use multiavatar
    likes: 0, 
    dislikes: 0 
  },

  { 
    id: 'unique-id-19',
    videoUrl: 'video18.mp4', 
    title: 'what is emotional damage', 
    username: 'viralVideo', 
    avatarUrl: toBase64(multiavatar('funLearning')), // Updated to use multiavatar
    likes: 0, 
    dislikes: 0 
  },
  { 
    id: 'unique-id-49',
    videoUrl: 'video49.mp4', 
    title: 'Your parents still see you as a kid', 
    username: 'funnyVideos', 
    avatarUrl: toBase64(multiavatar('funnyVideos')), // Updated to use multiavatar
    likes: 0, 
    dislikes: 0 
  },
  { 
    id: 'unique-id-50',
    videoUrl: 'video50.mp4', 
    title: 'Life is betrayal, but we are not.', 
    username: 'lifeSucked', 
    avatarUrl: toBase64(multiavatar('lifeSucked')), // Updated to use multiavatar
    likes: 0, 
    dislikes: 0 
  },
  { 
    id: 'unique-id-51',
    videoUrl: 'video51.mp4', 
    title: 'Local hai bhai , jaane do', 
    username: 'funnyVideos', 
    avatarUrl: toBase64(multiavatar('funnyVideos')), // Updated to use multiavatar
    likes: 0, 
    dislikes: 0 
  },
  { 
    id: 'unique-id-20',
    videoUrl: 'video19.mp4', 
    title: 'Today I learn cook pasta but..', 
    username: 'exploreLife', 
    avatarUrl: toBase64(multiavatar('exploreLife')), // Updated to use multiavatar
    likes: 0, 
    dislikes: 0 
  },
  { 
    id: 'unique-id-21',
    videoUrl: 'video20.mp4', 
    title: 'Being honest is matter', 
    username: 'loveTips', 
    avatarUrl: toBase64(multiavatar('loveTips')), // Updated to use multiavatar
    likes: 0, 
    dislikes: 0 
  },
  { 
    id: 'unique-id-18',
    videoUrl: 'video17.mp4', 
    title: 'This song took my all oxyzen', 
    username: 'MusicLover', 
    avatarUrl: toBase64(multiavatar('realSingers')), // Updated to use multiavatar
    likes: 0, 
    dislikes: 0 
  },

  { 
    id: 'unique-id-53',
    videoUrl: 'video53.mp4', 
    title: 'Indian Refrigerator',
    username: 'weirdThings', 
    avatarUrl: toBase64(multiavatar('weirdThings')), // Updated to use multiavatar
    likes: 0, 
    dislikes: 0 
  },
  { 
    id: 'unique-id-54',
    videoUrl: 'video54.mp4', 
    title: 'No Weight No Problem', 
    username: 'cuteAnimals', 
    avatarUrl: toBase64(multiavatar('cuteAnimals')), // Updated to use multiavatar
    likes: 0, 
    dislikes: 0 
  },
  { 
    id: 'unique-id-13',
    videoUrl: 'video12.mp4', 
    title: 'Just say A A A and you are viral.', 
    username: 'KhabyMusic', 
    avatarUrl: toBase64(multiavatar('khabyMusic')), // Updated to use multiavatar
    likes: 0, 
    dislikes: 0 
  },
 
  { 
    id: 'unique-id-22',
    videoUrl: 'video21.mp4', 
    title: 'Hey Siri, I am failed : (', 
    username: 'siriTips', 
    avatarUrl: toBase64(multiavatar('siriAdvices')), // Updated to use multiavatar
    likes: 0, 
    dislikes: 0 
  },
  { 
    id: 'unique-id-23',
    videoUrl: 'video22.mp4', 
    title: 'What the hack I just wacthed?', 
    username: 'weirdThings', 
    avatarUrl: toBase64(multiavatar('amazingThings')), // Updated to use multiavatar
    likes: 0, 
    dislikes: 0 
  },
  { 
    id: 'unique-id-24',
    videoUrl: 'video23.mp4', 
    title: 'Kulfi is love in summer', 
    username: 'coolChef', 
    avatarUrl: toBase64(multiavatar('icecream')), // Updated to use multiavatar
    likes: 0, 
    dislikes: 0 
  },
  { 
    id: 'unique-id-26',
    videoUrl: 'video25.mp4', 
    title: 'Big Big Dreams but', 
    username: 'viralVideo', 
    avatarUrl: toBase64(multiavatar('funny')), // Updated to use multiavatar
    likes: 0, 
    dislikes: 0 
  },
  { 
    id: 'unique-id-27',
    videoUrl: 'video27.mp4', 
    title: 'I know tum hoshiyaar ho but', 
    username: 'cutekids', 
    avatarUrl: toBase64(multiavatar('kidsThinking')), // Updated to use multiavatar
    likes: 0, 
    dislikes: 0 
  },
  { 
    id: 'unique-id-28',
    videoUrl: 'video28.mp4', 
    title: 'A genuine partner', 
    username: 'InnocentLover', 
    avatarUrl: toBase64(multiavatar('InnocentLover')), // Updated to use multiavatar
    likes: 0, 
    dislikes: 0 
  },
  { 
    id: 'unique-id-29',
    videoUrl: 'video29.mp4', 
    title: 'How to get slim without avoid food.', 
    username: 'siriTips', 
    avatarUrl: toBase64(multiavatar('siriTips')), // Updated to use multiavatar
    likes: 0, 
    dislikes: 0 
  },
  { 
    id: 'unique-id-30',
    videoUrl: 'video30.mp4', 
    title: 'Mera Sapna pura hogya aaj', 
    username: 'viralVideo', 
    avatarUrl: toBase64(multiavatar('weirdThings')), // Updated to use multiavatar
    likes: 0, 
    dislikes: 0 
  },
  { 
    id: 'unique-id-31',
    videoUrl: 'video31.mp4', 
    title: 'In On At what the heck???', 
    username: 'englishTips', 
    avatarUrl: toBase64(multiavatar('englishTips')), // Updated to use multiavatar
    likes: 0, 
    dislikes: 0 
  },
  { 
    id: 'unique-id-32',
    videoUrl: 'video32.mp4', 
    title: 'She is totally me', 
    username: 'funnyVideos', 
    avatarUrl: toBase64(multiavatar('madgirl')), // Updated to use multiavatar
    likes: 0, 
    dislikes: 0 
  },
  { 
    id: 'unique-id-34',
    videoUrl: 'video34.mp4', 
    title: 'I never write poem for you', 
    username: 'poetryLover', 
    avatarUrl: toBase64(multiavatar('writepoem')), // Updated to use multiavatar
    likes: 0, 
    dislikes: 0 
  },

  { 
    id: 'unique-id-36',
    videoUrl: 'video36.mp4', 
    title: 'Life is coffee', 
    username: 'cutekids', 
    avatarUrl: toBase64(multiavatar('cofeelover')), // Updated to use multiavatar
    likes: 0, 
    dislikes: 0 
  },
 
  { 
    id: 'unique-id-38',
    videoUrl: 'video38.mp4', 
    title: 'Suddenly He is now.', 
    username: 'LoveTips', 
    avatarUrl: toBase64(multiavatar('loveHearBreaker')), // Updated to use multiavatar
    likes: 0, 
    dislikes: 0 
  },
  { 
    id: 'unique-id-39',
    videoUrl: 'video39.mp4', 
    title: 'I am in love with this view.', 
    username: 'World', 
    avatarUrl: toBase64(multiavatar('amazingViews')), // Updated to use multiavatar
    likes: 0, 
    dislikes: 0 
  },
 
  { 
    id: 'unique-id-41',
    videoUrl: 'video41.mp4', 
    title: 'Sololearn said coding is not hard.', 
    username: 'sololearn', 
    avatarUrl: '/sololearn.png', // Updated to use multiavatar
    likes: 0, 
    dislikes: 0 
  },
  { 
    id: 'unique-id-42',
    videoUrl: 'video42.mp4', 
    title: 'First Time trying to smile', 
    username: 'WeirdArtists', 
    avatarUrl: toBase64(multiavatar('polyglotAdventures')), // Updated to use multiavatar
    likes: 0, 
    dislikes: 0 
  },
  { 
    id: 'unique-id-43',
    videoUrl: 'video43.mp4', 
    title: 'This view caged my soul.', 
    username: 'World', 
    avatarUrl: toBase64(multiavatar('amazingViews')), // Updated to use multiavatar
    likes: 0, 
    dislikes: 0 
  },
  { 
    id: 'unique-id-44',
    videoUrl: 'video44.mp4', 
    title: 'When new Semester Started', 
    username: 'schoolLife', 
    avatarUrl: toBase64(multiavatar('schoolLife')), // Updated to use multiavatar
    likes: 0, 
    dislikes: 0 
  },
  { 
    id: 'unique-id-45',
    videoUrl: 'video45.mp4', 
    title: 'First income as programmer', 
    username: 'lifeSucked', 
    avatarUrl: toBase64(multiavatar('lifesucked')), // Updated to use multiavatar
    likes: 0, 
    dislikes: 0 
  },
  { 
    id: 'unique-id-46',
    videoUrl: 'video46.mp4', 
    title: 'Tera alvida bhari pada is dil ko', 
    username: 'poetryLover', 
    avatarUrl: toBase64(multiavatar('poetryLover')), // Updated to use multiavatar
    likes: 0, 
    dislikes: 0 
  },
  { 
    id: 'unique-id-47',
    videoUrl: 'video47.mp4', 
    title: 'Life hacks you need to know', 
    username: 'fullMotivation', 
    avatarUrl: toBase64(multiavatar('fullMotivation')), // Updated to use multiavatar
    likes: 0, 
    dislikes: 0 
  },
  { 
    id: 'unique-id-48',
    videoUrl: 'video48.mp4', 
    title: 'Yoga for beginners', 
    username: 'poetryLover', 
    avatarUrl: toBase64(multiavatar('poetryLover')), // Updated to use multiavatar
    likes: 0, 
    dislikes: 0 
  },
 
  { 
    id: 'unique-id-52',
    videoUrl: 'video52.mp4', 
    title: 'Not getting money yet just..', 
    username: 'lifeSucked', 
    avatarUrl: toBase64(multiavatar('lifesucked')), // Updated to use multiavatar
    likes: 0, 
    dislikes: 0 
  },
  { 
    id: 'unique-id-53',
    videoUrl: 'video53.mp4', 
    title: 'Refrigerator of different countries', 
    username: 'weirdThings', 
    avatarUrl: toBase64(multiavatar('weirdThings')), // Updated to use multiavatar
    likes: 0, 
    dislikes: 0 
  },
  { 
    id: 'unique-id-54',
    videoUrl: 'video54.mp4', 
    title: 'No Weight No Problem', 
    username: 'cuteAnimals', 
    avatarUrl: toBase64(multiavatar('cuteAnimals')), // Updated to use multiavatar
    likes: 0, 
    dislikes: 0 
  },
  { 
    id: 'unique-id-55',
    videoUrl: 'video55.mp4', 
    title: 'Avoid this during meeting', 
    username: 'weirdThings', 
    avatarUrl: toBase64(multiavatar('TipsForImprovement')), // Updated to use multiavatar
    likes: 0, 
    dislikes: 0 
  },
  { 
    id: 'unique-id-35',
    videoUrl: 'video35.mp4', 
    title: 'I never removed your memories', 
    username: 'poetryLover', 
    avatarUrl: toBase64(multiavatar('writepoem')), // Updated to use multiavatar
    likes: 0, 
    dislikes: 0 
  },

]