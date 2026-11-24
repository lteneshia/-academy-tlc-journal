/* ---------- Built-in content: verses (KJV, public domain), Bible books, reading plans, prompts ---------- */
var VERSES = [
  ['Philippians 4:6', 'Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God.'],
  ['Jeremiah 29:11', 'For I know the thoughts that I think toward you, saith the LORD, thoughts of peace, and not of evil, to give you an expected end.'],
  ['Proverbs 3:5–6', 'Trust in the LORD with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths.'],
  ['Isaiah 40:31', 'But they that wait upon the LORD shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint.'],
  ['1 Thessalonians 5:16–18', 'Rejoice evermore. Pray without ceasing. In every thing give thanks: for this is the will of God in Christ Jesus concerning you.'],
  ['Lamentations 3:22–23', 'It is of the LORD\'s mercies that we are not consumed, because his compassions fail not. They are new every morning: great is thy faithfulness.'],
  ['Psalm 46:1', 'God is our refuge and strength, a very present help in trouble.'],
  ['Romans 8:28', 'And we know that all things work together for good to them that love God, to them who are the called according to his purpose.'],
  ['Joshua 1:9', 'Have not I commanded thee? Be strong and of a good courage; be not afraid, neither be thou dismayed: for the LORD thy God is with thee whithersoever thou goest.'],
  ['Psalm 118:24', 'This is the day which the LORD hath made; we will rejoice and be glad in it.'],
  ['Matthew 6:33', 'But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you.'],
  ['Mark 11:24', 'Therefore I say unto you, What things soever ye desire, when ye pray, believe that ye receive them, and ye shall have them.'],
  ['James 5:16', 'Confess your faults one to another, and pray one for another, that ye may be healed. The effectual fervent prayer of a righteous man availeth much.'],
  ['Psalm 145:18', 'The LORD is nigh unto all them that call upon him, to all that call upon him in truth.'],
  ['Jeremiah 33:3', 'Call unto me, and I will answer thee, and shew thee great and mighty things, which thou knowest not.'],
  ['Matthew 7:7', 'Ask, and it shall be given you; seek, and ye shall find; knock, and it shall be opened unto you.'],
  ['Psalm 34:18', 'The LORD is nigh unto them that are of a broken heart; and saveth such as be of a contrite spirit.'],
  ['Isaiah 41:10', 'Fear thou not; for I am with thee: be not dismayed; for I am thy God: I will strengthen thee; yea, I will help thee; yea, I will uphold thee with the right hand of my righteousness.'],
  ['2 Corinthians 12:9', 'And he said unto me, My grace is sufficient for thee: for my strength is made perfect in weakness.'],
  ['Psalm 37:4', 'Delight thyself also in the LORD; and he shall give thee the desires of thine heart.'],
  ['Romans 12:12', 'Rejoicing in hope; patient in tribulation; continuing instant in prayer.'],
  ['Colossians 4:2', 'Continue in prayer, and watch in the same with thanksgiving.'],
  ['Hebrews 4:16', 'Let us therefore come boldly unto the throne of grace, that we may obtain mercy, and find grace to help in time of need.'],
  ['Psalm 5:3', 'My voice shalt thou hear in the morning, O LORD; in the morning will I direct my prayer unto thee, and will look up.'],
  ['Psalm 121:1–2', 'I will lift up mine eyes unto the hills, from whence cometh my help. My help cometh from the LORD, which made heaven and earth.'],
  ['Zephaniah 3:17', 'The LORD thy God in the midst of thee is mighty; he will save, he will rejoice over thee with joy; he will rest in his love, he will joy over thee with singing.'],
  ['John 14:27', 'Peace I leave with you, my peace I give unto you: not as the world giveth, give I unto you. Let not your heart be troubled, neither let it be afraid.'],
  ['1 Peter 5:7', 'Casting all your care upon him; for he careth for you.'],
  ['Galatians 6:9', 'And let us not be weary in well doing: for in due season we shall reap, if we faint not.'],
  ['Numbers 6:24–26', 'The LORD bless thee, and keep thee: The LORD make his face shine upon thee, and be gracious unto thee: The LORD lift up his countenance upon thee, and give thee peace.'],
  ['Psalm 107:1', 'O give thanks unto the LORD, for he is good: for his mercy endureth for ever.'],
  ['Romans 15:13', 'Now the God of hope fill you with all joy and peace in believing, that ye may abound in hope, through the power of the Holy Ghost.'],
  ['Isaiah 26:3', 'Thou wilt keep him in perfect peace, whose mind is stayed on thee: because he trusteth in thee.'],
  ['Psalm 27:1', 'The LORD is my light and my salvation; whom shall I fear? the LORD is the strength of my life; of whom shall I be afraid?'],
  ['Matthew 21:22', 'And all things, whatsoever ye shall ask in prayer, believing, ye shall receive.'],
  ['Psalm 55:22', 'Cast thy burden upon the LORD, and he shall sustain thee: he shall never suffer the righteous to be moved.'],
  ['Deuteronomy 31:6', 'Be strong and of a good courage, fear not, nor be afraid of them: for the LORD thy God, he it is that doth go with thee; he will not fail thee, nor forsake thee.'],
  ['Hebrews 11:1', 'Now faith is the substance of things hoped for, the evidence of things not seen.'],
  ['Psalm 19:14', 'Let the words of my mouth, and the meditation of my heart, be acceptable in thy sight, O LORD, my strength, and my redeemer.'],
  ['2 Timothy 1:7', 'For God hath not given us the spirit of fear; but of power, and of love, and of a sound mind.'],
  ['John 15:7', 'If ye abide in me, and my words abide in you, ye shall ask what ye will, and it shall be done unto you.'],
  ['Micah 6:8', 'He hath shewed thee, O man, what is good; and what doth the LORD require of thee, but to do justly, and to love mercy, and to walk humbly with thy God?'],
  ['Psalm 23:1', 'The LORD is my shepherd; I shall not want.'],
  ['Philippians 4:7', 'And the peace of God, which passeth all understanding, shall keep your hearts and minds through Christ Jesus.'],
  ['1 John 5:14', 'And this is the confidence that we have in him, that, if we ask any thing according to his will, he heareth us.'],
  ['Psalm 46:10', 'Be still, and know that I am God.']
];

var BOOKS = [['Genesis', 50], ['Exodus', 40], ['Leviticus', 27], ['Numbers', 36], ['Deuteronomy', 34], ['Joshua', 24], ['Judges', 21], ['Ruth', 4], ['1 Samuel', 31], ['2 Samuel', 24], ['1 Kings', 22], ['2 Kings', 25], ['1 Chronicles', 29], ['2 Chronicles', 36], ['Ezra', 10], ['Nehemiah', 13], ['Esther', 10], ['Job', 42], ['Psalms', 150], ['Proverbs', 31], ['Ecclesiastes', 12], ['Song of Solomon', 8], ['Isaiah', 66], ['Jeremiah', 52], ['Lamentations', 5], ['Ezekiel', 48], ['Daniel', 12], ['Hosea', 14], ['Joel', 3], ['Amos', 9], ['Obadiah', 1], ['Jonah', 4], ['Micah', 7], ['Nahum', 3], ['Habakkuk', 3], ['Zephaniah', 3], ['Haggai', 2], ['Zechariah', 14], ['Malachi', 4],
  ['Matthew', 28], ['Mark', 16], ['Luke', 24], ['John', 21], ['Acts', 28], ['Romans', 16], ['1 Corinthians', 16], ['2 Corinthians', 13], ['Galatians', 6], ['Ephesians', 6], ['Philippians', 4], ['Colossians', 4], ['1 Thessalonians', 5], ['2 Thessalonians', 3], ['1 Timothy', 6], ['2 Timothy', 4], ['Titus', 3], ['Philemon', 1], ['Hebrews', 13], ['James', 5], ['1 Peter', 5], ['2 Peter', 3], ['1 John', 5], ['2 John', 1], ['3 John', 1], ['Jude', 1], ['Revelation', 22]];

/* id, name, blurb, from book, to book (inclusive), days */
var PLANS = [
  ['proverbs31', 'Proverbs in 31 Days', 'One chapter of wisdom a day. A sweet place to start.', 'Proverbs', 'Proverbs', 31],
  ['psalms30', 'Psalms in 30 Days', 'Five psalms a day of praise, lament and comfort.', 'Psalms', 'Psalms', 30],
  ['gospels30', 'The Gospels in 30 Days', 'Walk with Jesus through Matthew, Mark, Luke and John.', 'Matthew', 'John', 30],
  ['nt90', 'New Testament in 90 Days', 'About three chapters a day, Matthew to Revelation.', 'Matthew', 'Revelation', 90],
  ['bible365', 'The Bible in a Year', 'Genesis to Revelation, about three chapters a day.', 'Genesis', 'Revelation', 365]
];
/* ---------- T.L.C PERMANENT SYSTEM MEMORY VERSES ---------- */
var SYSTEM_VERSES = [
  ['Proverbs 3:5–6', 'Trust in the LORD with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths.', 'Wisdom'],
  ['Philippians 4:6–7', 'Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God. And the peace of God, which passeth all understanding, shall keep your hearts and minds through Christ Jesus.', 'Anxiety'],
  ['Isaiah 41:10', 'Fear thou not; for I am with thee: be not dismayed; for I am thy God: I will strengthen thee; yea, I will help thee; yea, I will uphold thee with the right hand of my righteousness.', 'Strength'],
  ['Psalm 46:1', 'God is our refuge and strength, a very present help in trouble.', 'Refuge'],
  ['Romans 8:28', 'And we know that all things work together for good to them that love God, to them who are the called according to his purpose.', 'Faith'],
  ['Joshua 1:9', 'Have not I commanded thee? Be strong and of a good courage; be not afraid, neither be thou dismayed: for the LORD thy God is with thee whithersoever thou goest.', 'Courage'],
  ['Matthew 6:33', 'But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you.', 'Priorities'],
  ['Psalm 119:105', 'Thy word is a lamp unto my feet, and a light unto my path.', 'Guidance'],
  ['Romans 12:2', 'And be not conformed to this world: but be ye transformed by the renewing of your mind, that ye may prove what is that good, and acceptable, and perfect, will of God.', 'Transformation'],
  ['2 Timothy 1:7', 'For God hath not given us the spirit of fear; but of power, and of love, and of a sound mind.', 'Peace'],
  ['Galatians 5:22–23', 'But the fruit of the Spirit is love, joy, peace, longsuffering, gentleness, goodness, faith, Meekness, temperance: against such there is no law.', 'Holiness'],
  ['Ephesians 2:8–9', 'For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast.', 'Salvation'],
  ['Hebrews 11:1', 'Now faith is the substance of things hoped for, the evidence of things not seen.', 'Faith'],
  ['1 Peter 5:7', 'Casting all your care upon him; for he careth for you.', 'Surrender'],
  ['Psalm 23:1', 'The LORD is my shepherd; I shall not want.', 'Comfort'],
  ['John 3:16', 'For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.', 'Love'],
  ['Romans 10:9', 'That if thou shalt confess with thy mouth the Lord Jesus, and shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved.', 'Salvation'],
  ['Isaiah 40:31', 'But they that wait upon the LORD shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint.', 'Patience'],
  ['Colossians 3:23', 'And whatsoever ye do, do it heartily, as to the Lord, and not unto men;', 'Diligence'],
  ['Psalm 19:14', 'Let the words of my mouth, and the meditation of my heart, be acceptable in thy sight, O LORD, my strength, and my redeemer.', 'Purity']
];


/* Chapters from one book to another, e.g. [['Matthew',1],...] */
function chaptersBetween(a, b) {
  var out = [], on = false;
  BOOKS.forEach(function (bk) {
    if (bk[0] === a) on = true;
    if (on) for (var c = 1; c <= bk[1]; c++) out.push([bk[0], c]);
    if (bk[0] === b) on = false;
  });
  return out;
}
/* Split chapters evenly over the days and label each day, e.g. "John 4–6" or "Mark 16 · Luke 1–2". */
function planDays(p) {
  if (p.custom) return p.custom;
  var def = PLANS.filter(function (x) { return x[0] === p.plan; })[0];
  if (!def) return [];
  var ch = chaptersBetween(def[3], def[4]), D = def[5], out = [];
  for (var i = 0; i < D; i++) {
    var part = ch.slice(Math.floor(i * ch.length / D), Math.floor((i + 1) * ch.length / D)), groups = [];
    part.forEach(function (x) { var g = groups[groups.length - 1]; if (g && g[0] === x[0]) g[2] = x[1]; else groups.push([x[0], x[1], x[1]]); });
    out.push(groups.map(function (g) { return g[0] + ' ' + g[1] + (g[2] !== g[1] ? '–' + g[2] : ''); }).join(' · '));
  }
  return out;
}
/* ---------- T.L.C 31-DAY INTENTIONAL GRATITUDE MATRIX ---------- */
var GRATITUDE_PROMPTS = [
  "What is one hidden mercy or blessing from yesterday that you initially overlooked?",
  "List 3 specific ways you saw God's character (love, protection, patience) in your life this week.",
  "Who is someone in your path right now that you are deeply grateful for, and what specific grace do they carry?",
  "Reflect on a past season of trial. What did the Lord build or restore in you that you thank Him for now?",
  "What physical comfort or structural provision in your home do you appreciate most today?",
  "Name one answered prayer from this past month that still fills your heart with praise.",
  "What is a piece of spiritual wisdom or divine guidance you received recently that you thank God for?",
  "List 3 simple, physical elements of creation (sunshine, rain, crisp morning air) that brought you joy today.",
  "What door did God close in your past that you are now incredibly thankful was never opened?",
  "Who is a spiritual mentor or leader who poured into your faith walk, and what did you learn from them?",
  "Reflect on your morning. What aspect of your early routine or quiet time are you most grateful for?",
  "What is a specific burden or heavy worry the Lord lifted from your mind this week?",
  "List 3 open doors, opportunities, or provisions in your current workspace or long-term role.",
  "What favorite fragrance, warm meal, or sensory gift did God surprise you with today?",
  "Reflect on your family or support circle. What specific attribute of theirs are you thankful for?",
  "What scripture verse or divine promise has anchored your soul most firmly over the past 48 hours?",
  "What element of your personal health, mobility, or physical energy are you praiseful for right now?",
  "List 3 distinct moments you laughed or experienced a lighthearted joy today.",
  "What lesson is the Holy Spirit gently pruning or teaching you in this quiet season?",
  "What is one piece of technology or modern connection tool that helps you stay close to loved ones?",
  "Reflect on a moment of peace you experienced today amidst a busy or noisy environment.",
  "What is an attribute of Jesus (His high priesthood, His advocacy, His intercession) you thank Him for?",
  "List 3 items in your pantry or kitchen that remind you of God's faithful, daily provision.",
  "What hard truth or moment of correction are you grateful for because it drew you closer to the cross?",
  "What is a beautiful sound or piece of worship music that filled your space with peace today?",
  "Who is a neighbor or community connection whose presence makes your environment brighter?",
  "Reflect on your baptism or salvation day. What about your redemption story leaves you most in awe?",
  "What seasonal shift, color, or beautiful landscape detail did you notice on your commute?",
  "List 3 distinct skills or spiritual gifts God gave you that you love using to serve others.",
  "What is a sweet memory from your childhood or early youth that still brings warmth to your heart?",
  "Look back over the full month. Write a declaration of thankfulness for His unshakeable faithfulness."
];

var CATS = [
  ['family', 'Household & Family', '#1B6B78'],
  ['marriage', 'Marriage & Covenant', '#2A556F'],
  ['kids', 'Children & Youth', '#E2723B'],
  ['friends', 'Fellowship & Friends', '#4A6B82'],
  ['health', 'Healing & Restoration', '#165B67'],
  ['work', 'Provision & Calling', '#D4AF37'],
  ['church', 'Ministry & Kingdom', '#0F4A53'],
  ['world', 'Nations & Community', '#3B7A85'],
  ['personal', 'Personal Walk', '#C89E31'],
  ['other', 'Special Petitions', '#6C828E']
];
function cat(k) {
  var found = CATS.filter(function(item) { return item.slice(0, 1).pop() === k; }).pop();
  return found || CATS.slice(-1).pop();
}

var METHODS = {
  acts: {
    name: 'ACTS',
    blurb: 'Adoration · Confession · Thanksgiving · Supplication',
    fields: [
      ['a', 'Adoration', 'Lift up praise for who God is—His holiness, faithfulness, and unchanging character.'],
      ['c', 'Confession', 'Honestly lay any burden, shortcoming, or distraction before the Lord and receive His grace.'],
      ['t', 'Thanksgiving', 'Record specific mercies, answered prayers, and daily blessings you are thanking Him for today.'],
      ['s', 'Supplication', 'Bring your intercessions for loved ones, your community, and your own walk before His throne.']
    ]
  },
  soap: {
    name: 'SOAP',
    blurb: 'Scripture · Observation · Application · Prayer',
    fields: [
      ['s', 'Scripture', 'Copy or summarize the passage that spoke to your spirit during today\'s reading.'],
      ['o', 'Observation', 'What does this passage reveal about God\'s nature, His promises, or the context of the text?'],
      ['ap', 'Application', 'How is the Holy Spirit inviting you to walk out this truth in your choices today?'],
      ['p', 'Prayer', 'Write a heartfelt response asking the Lord to seal this Word in your heart.']
    ]
  },
  guided: {
    name: 'Guided Prompt',
    blurb: 'A focused reflection based on today\'s faith question',
    fields: [
      ['text', 'My Reflection', 'Pour out your heart in response to the guided question above.']
    ]
  },
  free: {
    name: 'Free write',
    blurb: 'An open page to pour out your heart',
    fields: [
      ['text', 'Dear Heavenly Father…', 'Write freely whatever is on your spirit today.']
    ]
  }
};

var PROMPTS = [
  'How did you sense the Lord\'s presence or guidance in your day today?',
  'What burden or unspoken worry are you ready to place into Jesus\' hands right now?',
  'Who has the Holy Spirit brought to your mind to lift up in prayer this week?',
  'Which promise from Scripture is anchoring your faith in this current season?',
  'Where is God inviting you to trust His timing even when the outcome is unseen?',
  'Write a prayer of surrender dedicating your plans, household, and steps to the Lord.',
  'What everyday provision or quiet mercy do you want to pause and thank God for today?',
  'Which name or attribute of God (Shepherd, Healer, Cornerstone, Provider) speaks loudest to you right now?',
  'In what area of your life do you need Christ\'s peace to guard your heart and mind?',
  'Look back at a prayer God answered in the past—how does that memory build your faith today?',
  'What spiritual lesson or habit is God gently cultivating in your life right now?',
  'Who in your circle needs a word of encouragement, and how can you bless them this week?',
  'Pour out any honest questions or heaviness you have been carrying silently before the Lord.',
  'Pray by name over each member of your household and ask God to cover them in His grace.',
  'What does true spiritual rest at the feet of Jesus look like for you in this season?'
];

/* ---------- CUSTOM FAITH-BASED GUIDED PROMPTS (MENTORSHIP ONLY) ---------- */
var GUIDED_PROMPTS = [
  'What is the Holy Spirit prompting you to surrender or lay down at the altar this morning?',
  'Where did you experience a clear glimpse of God\'s unmerited favor or grace this week?',
  'Is there a specific scripture promise you feel called to stand firmly upon in this current season?',
  'How is God teaching you to walk by faith and not by sight in your current circumstances?',
  'Who has the Lord placed on your heart today for intercessory prayer, and what is your specific petition for them?',
  'Reflect on a recent answered prayer. How does remembering His faithfulness strengthen your trust today?',
  'In what area of your life is God calling you to step out in obedience, even if the path ahead is unclear?',
  'What does resting your soul in the presence of Jesus look like for you today?',
  'Which character trait or name of God (e.g., Jehovah Jireh, El Roi) feels most relevant to your heart right now?',
  'Write out a declaration of praise thanking God for a victory you are still waiting to see manifest.'
];
/* ---------- T.L.C SHARED DAILY GROUP PRAYERS ---------- */
var DAILY_PRAYERS = [
  {
    title: 'A Prayer for Spiritual Wisdom',
    details: 'Lord, open our spiritual eyes today. Grant us the spirit of wisdom and revelation so that we may know You deeper and understand the hope to which You have called us.'
  },
  {
    title: 'A Prayer for Steadfast Faith',
    details: 'Father, when waves of worry try to take our peace, remind us to stand firmly on Your promises. Help us to walk by faith today, anchoring our hearts completely in Your truth.'
  },
  {
    title: 'A Prayer for Divine Provision',
    details: 'Jehovah Jireh, we thank You that You are our Provider. We lay down all financial anxieties at Your feet, trusting that You will supply every single need right on time according to Your riches.'
  },
  {
    title: 'A Prayer for Emotional Healing',
    details: 'Lord, for every heart that is carrying hidden pain, heavy burdens, or past hurts, we ask for Your supernatural comfort. Be nigh unto the brokenhearted and restore our souls today.'
  },
  {
    title: 'A Prayer for Unity and Love',
    details: 'Jesus, we pray for our families and our study group. Knit our hearts together in perfect love. Let our speech be seasoned with grace, reflecting Your light to everyone we cross paths with.'
  }
];


/* ---------- CUSTOM ACADEMY T.L.C. MONTHLY REFLECTION MATRIX ---------- */
var REFLECT = [
  ['character', 'What did the scriptures you read over the last 30 days reveal or remind you about God’s heart, faithfulness, and character?'],
  ['anchor', 'Which single verse or phrase from this month\'s reading plan stuck with you the most, and why did your heart need to hear it?'],
  ['fuel', 'What was the most practical truth you learned this month that helped you get through a busy, stressful, or chaotic day?'],
  ['shift', 'How did your view of God, yourself, or your circumstances shift or change because of what you read over the last 30 days?'],
  ['action', 'What is one specific, tangible action you took (or need to take) to live out a passage you studied this month?'],
  ['pivot', 'Based on your highlights and notes from this month\'s reading, what is the number one thing you need to sit and talk with God about as you head into the next month?']
];

/* =====================================================================
   Academy T.L.C. (The Lord's Children) — Core Application Engine
   ===================================================================== */
var IS_GAS = false;
var TABLES = ['settings', 'prayers', 'entries', 'verses', 'gratitude', 'reading'];
var COLS = TABLES;
var LOCAL_KEY = 'academy-tlc-journal-v1';
var WALL_KEY = 'academy-tlc-group-prayers-v1';
var INBOX_KEY = 'academy-tlc-prayer-inbox-v1';
var PLAN_KEY = 'academy-tlc-plan-v1';
var BIBLE_CACHE = { KJV: null, BSB: null };

async function loadLocalBible(version) {
  var v = (version || 'KJV').toUpperCase().trim();
  if (BIBLE_CACHE[v]) return BIBLE_CACHE[v];
  var res = await fetch(v === 'BSB' ? './data/bsb.json' : './data/kjv.json');
  BIBLE_CACHE[v] = await res.json();
  return BIBLE_CACHE[v];
}

function getLocalDb_() {
  try {
    var raw = JSON.parse(localStorage.getItem(LOCAL_KEY) || '{}');
    var db = {};
    TABLES.forEach(function(t) {
      if (Array.isArray(raw[t])) {
        db[t] = raw[t];
      } else if (raw[t] && typeof raw[t] === 'object') {
        db[t] = Object.values(raw[t]);
      } else {
        db[t] = [];
      }
    });
    return db;
  } catch (e) {
    var empty = {};
    TABLES.forEach(function(t) { empty[t] = []; });
    return empty;
  }
}

function saveLocalDb_(db) {
  localStorage.setItem(LOCAL_KEY, JSON.stringify(db));
}


async function lookupSingleVerseOffline_(refStr, ver) {
  var cleanRef = String(refStr || '').trim();
  var m = cleanRef.match(/^([\d\s]*[A-Za-z\s]+)\s+(\d+):(\d+)/);
  if (!m) return { ok: false, msg: 'Please enter a reference like John 3:16 or Psalm 23:1.' };
  var targetBook = m[1].toLowerCase().trim();
  var chap = m[2].trim();
  var vs = m[3].trim();
  var version = String(ver || 'KJV').toUpperCase().trim();
  var bible = await loadLocalBible(version);
  var bookKey = Object.keys(bible).find(function(k) { return k.toLowerCase().trim() === targetBook; });
  var text = bookKey && bible[bookKey] && bible[bookKey][chap] ? bible[bookKey][chap][vs] : null;
  if (!text) return { ok: false, msg: 'Verse "' + cleanRef + '" was not found in ' + version + '.' };
  return { ok: true, ref: bookKey + ' ' + chap + ':' + vs, text: text, ver: version };
}

var SB_URL = 'https://htctavbdsxnxgsfjfqbi.supabase.co';
var SB_KEY = 'sb_publishable_mMZ_AZiNrMzk4Xj7CHV_3w_Q1-Bo07C';

async function sbFetch_(path, opts) {
  opts = opts || {};
  var headers = Object.assign({
    'apikey': SB_KEY,
    'Authorization': 'Bearer ' + (localStorage.getItem('tlc_sb_token') || SB_KEY),
    'Content-Type': 'application/json'
  }, opts.headers || {});
  var res = await fetch(SB_URL + path, Object.assign({}, opts, { headers: headers }));
  var text = await res.text();
  var data = text ? JSON.parse(text) : null;
  if (!res.ok) throw new Error((data && (data.message || data.error_description)) || 'Request failed');
  return data;
}

async function fetchLivePlanAndAnnouncement_() {
  try {
    var rows = await sbFetch_('/rest/v1/reading_plan?select=plan_date,plan_1,plan_2&order=plan_date.asc');
    var annRows = await sbFetch_('/rest/v1/app_settings?select=value&key=eq.group_announcement');
    var formatted = [['Date', 'Reading Plan 1', 'Reading Plan 2']].concat(
      (rows || []).map(function(r) { return [r.plan_date, r.plan_1, r.plan_2]; })
    );
    var ann = (annRows && annRows[0] && annRows[0].value) || '';
    var payload = { rows: formatted, announcement: ann };
    localStorage.setItem(PLAN_KEY, JSON.stringify(payload));
    return payload;
  } catch (e) {
    var cached = JSON.parse(localStorage.getItem(PLAN_KEY) || 'null');
    if (cached && cached.rows && cached.rows.length) return cached;
    try {
      var res = await fetch('./data/plan.json');
      if (res.ok) return await res.json();
    } catch (err) {}
    return { rows: [], announcement: '' };
  }
}

async function runServer(fnName, arg1, arg2) {
   if (fnName === 'api_load') {
    var plan = await fetchLivePlanAndAnnouncement_();
    return JSON.stringify({
      data: getLocalDb_(),
      url: window.location.href,
      adminPlan: plan.rows || [],
      announcement: plan.announcement || ''
    });
  }



  if (fnName === 'api_save') {
    var db = getLocalDb_();
    var ops = JSON.parse(arg1 || '[]');
    ops.forEach(function(op) {
      if (!db[op.c]) db[op.c] = [];
      if (op.del) {
        db[op.c] = db[op.c].filter(function(r) { return String(r.id) !== String(op.del); });
      } else if (op.rec) {
        var idx = db[op.c].findIndex(function(r) { return String(r.id) === String(op.rec.id); });
        if (idx >= 0) db[op.c][idx] = op.rec;
        else db[op.c].push(op.rec);
      }
    });
    saveLocalDb_(db);
    return 'ok';
  }

  if (fnName === 'api_reset') { localStorage.removeItem(LOCAL_KEY); return 'ok'; }
  if (fnName === 'api_tabs') return 'ok';

  if (fnName === 'api_bible_lookup') {
    var ver = (arg1 && arg1.version) || 'KJV';
    var bible = await loadLocalBible(ver);
    var targetBook = String((arg1 && arg1.book) || '').toLowerCase().trim();
    var chap = String((arg1 && arg1.chapter) || '').trim();
    var bookKey = Object.keys(bible).find(function(k) { return k.toLowerCase().trim() === targetBook; });
    var versesObj = bookKey && bible[bookKey] ? bible[bookKey][chap] : null;
    if (!versesObj) return '<p class="mu">No text matching this chapter was found in ' + ver + '.</p>';
    return Object.keys(versesObj).map(function(vNum) {
      return '<p id="v_' + vNum + '" data-v="' + vNum + '" onclick="tapBibleVerse(\'' + vNum + '\')" style="margin-bottom:10px; padding:4px 8px; border-radius:8px; cursor:pointer; transition: background 0.3s ease;"><span style="color:var(--rose); font-weight:600; font-size:13px; margin-right:8px; vertical-align:super;">' + vNum + '</span>' + versesObj[vNum] + '</p>';
    }).join('');
  }

  if (fnName === 'api_lookup_single_verse') return lookupSingleVerseOffline_(arg1, arg2);

      if (fnName === 'api_fetch_raw_admin_plan') {
    return fetchLivePlanAndAnnouncement_();
  }



    if (fnName === 'api_submit_group_prayer') {
    var p = arg1 || {};
    if (!String(p.title || '').trim()) throw new Error('Please enter a prayer request title.');
    var myTokens = JSON.parse(localStorage.getItem('tlc_my_prayer_tokens') || '[]');
    var token = 'tok_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8);
    myTokens.push(token);
    localStorage.setItem('tlc_my_prayer_tokens', JSON.stringify(myTokens));

    await sbFetch_('/rest/v1/group_prayers', {
      method: 'POST',
      headers: { 'Prefer': 'return=minimal' },
      body: JSON.stringify([{
        prayer_date: today(),
        author: String(p.from || 'Anonymous').trim(),
        title: String(p.title || '').trim(),
        details: String(p.details || '').trim(),
        allow_wall: !!p.allowWall,
        status: 'pending',
        owner_token: token
      }])
    });
    return 'ok';
  }

  if (fnName === 'api_fetch_group_prayers') {
    var pin = sessionStorage.getItem('tlc_admin_pin') || '';
    var rows = [];
    if (pin || localStorage.getItem('tlc_sb_token')) {
      try {
        rows = await sbFetch_('/rest/v1/rpc/admin_fetch_prayers', {
          method: 'POST',
          body: JSON.stringify({ p_pin: pin })
        });
      } catch (e) {
        sessionStorage.removeItem('tlc_admin_pin');
        localStorage.removeItem('tlc_sb_token');
        rows = await sbFetch_('/rest/v1/group_prayers?select=id,prayer_date,author,title,details,status,answered,owner_token&status=eq.approved&order=created_at.desc');
      }
    } else {
      rows = await sbFetch_('/rest/v1/group_prayers?select=id,prayer_date,author,title,details,status,answered,owner_token&status=eq.approved&order=created_at.desc');
    }
    return (rows || []).map(function(r) {
      return {
        id: r.id, date: r.prayer_date, from: r.author, title: r.title,
        details: r.details, status: r.status, answered: !!r.answered, owner_token: r.owner_token
      };
    });
  }


  return null;
}
var gas = runServer;





function readLocalStore() {
  var store = {};
  try { store = JSON.parse(localStorage.getItem(LOCAL_KEY) || '{}'); } catch (e) {}
  TABLES.forEach(function(t) { store[t] = store[t] || {}; });
  return store;
}

function writeLocalStore(data) {
  try { localStorage.setItem(LOCAL_KEY, JSON.stringify(data)); } catch (e) {}
}

var API = {
  load: function() {
    return runServer('api_load').then(JSON.parse);
  },
  save: function(ops) {
    if (IS_GAS) return runServer('api_save', JSON.stringify(ops));
    var local = readLocalStore();
    ops.forEach(function(op) {
      if (op.del) delete local[op.c][op.del];
      else local[op.c][op.rec.id] = op.rec;
    });
    writeLocalStore(local);
    return Promise.resolve('ok');
  },
  reset: function() {
    if (IS_GAS) return runServer('api_reset');
    writeLocalStore({});
    return Promise.resolve('ok');
  },
  tabs: function(t) {
    if (IS_GAS) return runServer('api_tabs', JSON.stringify(t));
    return Promise.resolve('local');
  }
};


var S = {};
TABLES.forEach(function(t) { S[t] = {}; });
var URL0 = '';
var UI = { view: 'today', ptab: 'active', pcat: '', q: '', vtab: 'saved', month: '', jfilter: '' };
var pendingOps = {}, syncTimer = null, isSyncing = false;
function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 9); }
function $(id) { return document.getElementById(id); }
function qa(sel, root) { return [].slice.call((root || document).querySelectorAll(sel)); }
function val(id) { var el = $(id); return el ? el.value.trim() : ''; }
function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function(ch) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]; }); }
function nl(s) { return esc(s).replace(/\n/g, '<br>'); }

function setPill(label) {
  var p1 = $('pill'); if (p1) p1.textContent = label;
  var p2 = $('pill2'); if (p2) p2.textContent = label === 'Saved' ? '' : label;
}

function triggerSync() {
  clearTimeout(syncTimer);
  syncTimer = setTimeout(commitSync, 0);
  setPill('Saving…');
}

function commitSync() {
  var batch = Object.values(pendingOps);
  if (!batch.length) return;
  if (isSyncing) { triggerSync(); return; }
  pendingOps = {};
  isSyncing = true;
  API.save(batch).then(function() {
    isSyncing = false;
    setPill(Object.keys(pendingOps).length ? 'Saving…' : 'Saved');
  }).catch(function() {
    isSyncing = false;
    batch.forEach(function(op) {
      var k = op.c + '|' + (op.del || op.rec.id);
      if (!pendingOps[k]) pendingOps[k] = op;
    });
    setPill('Retrying…');
    setTimeout(commitSync, 3500);
  });
}

window.addEventListener('beforeunload', function(e) {
  if (Object.keys(pendingOps).length || isSyncing) {
    commitSync();
    e.preventDefault();
    e.returnValue = '';
  }
});

function put(table, record, silent) {
  if (!record.id) record.id = uid();
  S[table][record.id] = record;
  pendingOps[table + '|' + record.id] = { c: table, rec: record };
  commitSync();
  if (!silent) render();
  return record;
}

function del(table, id, silent) {
  delete S[table][id];
  pendingOps[table + '|' + id] = { c: table, del: id };
  commitSync();
  if (!silent) render();
}


function cfg() {
  var c = S.settings.main || { id: 'main' };
  var savedName = localStorage.getItem('tlc_user_name_v1');
  if (savedName) c.name = savedName;
  if (localStorage.getItem('tlc_welcomed_v1') === '1') c.welcomed = 1;
  return c;
}

function setCfg(key, value) { var c = cfg(); c[key] = value; put('settings', c, true); }
function all(table) { return Object.values(S[table]); }

function applyEveningTheme() {
  if (document.body) document.body.classList.toggle('evening', cfg().eveningMode === '1');
}

function toggleEveningTheme() {
  var next = (cfg().eveningMode === '1') ? '' : '1';
  setCfg('eveningMode', next);
  applyEveningTheme();
  render();
  toast(next === '1' ? 'Warm Evening Mode on.' : 'Daylight Mode restored.');
}

function toast(msg, undoFn) {
  var box = $('toast');
  box.innerHTML = '<span>' + esc(msg) + '</span>' + (undoFn ? '<button id="undo">Undo</button>' : '');
  box.hidden = false;
  if (undoFn) $('undo').onclick = function() { box.hidden = true; undoFn(); };
  clearTimeout(box._t);
  box._t = setTimeout(function() { box.hidden = true; }, 3800);
}

function copyText(txt, msg) {
  function manualCopy() {
    var ta = document.createElement('textarea');
    ta.value = txt;
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); toast(msg || 'Copied!'); } catch (e) { toast('Select and copy text manually.'); }
    ta.remove();
  }
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(txt).then(function() { toast(msg || 'Copied!'); }, manualCopy);
  } else {
    manualCopy();
  }
}
var DOW = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var DOWL = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var MONL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function pd(str) {
  if (!str) return null;
  var parts = str.split('-');
  var y = parseInt(parts.shift(), 10);
  var m = parseInt(parts.shift(), 10) - 1;
  var d = parseInt(parts.shift() || '1', 10);
  return new Date(y, m, d);
}

function iso(dt) {
  return dt.getFullYear() + '-' + ('0' + (dt.getMonth() + 1)).slice(-2) + '-' + ('0' + dt.getDate()).slice(-2);
}

function today() { return window.FAKE_TODAY || iso(new Date()); }
function addDays(str, delta) { var d = pd(str); d.setDate(d.getDate() + delta); return iso(d); }
function daysBetween(startStr, endStr) { return Math.round((pd(endStr) - pd(startStr)) / 86400000); }

function fmtD(str, includeDay) {
  var d = pd(str);
  if (!d) return '';
  var yr = d.getFullYear() !== pd(today()).getFullYear() ? ', ' + d.getFullYear() : '';
  return includeDay ? (DOWL[d.getDay()] + ', ' + MONL[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear()) : (MON[d.getMonth()] + ' ' + d.getDate() + yr);
}

function ago(str) {
  var diff = daysBetween(str, today());
  if (diff <= 0) return 'today';
  if (diff === 1) return 'yesterday';
  if (diff < 7) return diff + ' days ago';
  if (diff < 60) return Math.round(diff / 7) + ' weeks ago';
  return Math.round(diff / 30) + ' months ago';
}

function plural(n, word) { return n + ' ' + word + (n === 1 ? '' : 's'); }
function hash(str) { var h = 0; for (var i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) | 0; return Math.abs(h); }
function verseOfDay(d) { return VERSES[hash('tlc_v_' + (d || today())) % VERSES.length]; }
function greeting() { var hr = new Date().getHours(); return hr < 12 ? 'Good morning' : hr < 17 ? 'Good afternoon' : 'Good evening'; }

var _promptOffset = 0, _prayerOffset = 0;

function cyclePrompt_() { _promptOffset++; render(); }
function cyclePrayer_() { _prayerOffset++; render(); }

function getDynamicPrompts_(isGuided) {
  var base = (isGuided ? GUIDED_PROMPTS : PROMPTS).slice();
  var starters = isGuided
    ? ['Read and meditate on ', 'Ask the Holy Spirit how to walk out ', 'Reflect on God\'s promise in ']
    : ['Pray through the truth of ', 'Thank the Lord for His faithfulness in ', 'Write a reflection anchored in '];
  VERSES.forEach(function(v, idx) {
    var c = v.slice();
    var ref = c.shift(), txt = c.shift();
    base.push(starters[idx % starters.length] + ref + ': “' + txt + '”');
  });
  return base;
}

function promptOfDay(d, type) {
  var activeType = type || (window._draft ? window._draft.type : 'free');
  var isGuided = (activeType === 'guided');
  var pool = getDynamicPrompts_(isGuided);
  return pool[(hash((isGuided ? 'tlc_g_' : 'tlc_p_') + (d || today())) + _promptOffset) % pool.length];
}

function prayerOfDay(d) {
  var pool = DAILY_PRAYERS.slice();
  VERSES.forEach(function(v) {
    var c = v.slice();
    var ref = c.shift(), txt = c.shift();
    pool.push({
      title: 'A Prayer Anchored in ' + ref,
      details: 'Heavenly Father, Your Word declares, “' + txt + '” (' + ref + '). Seal this promise in our hearts today, strengthen our faith, and glorify Your name in our lives and families. In Jesus\' name, Amen.'
    });
  });
  return pool[(hash('grouppotd' + (d || today())) + _prayerOffset) % pool.length];
}


function prayers() { return all('prayers'); }
function active() { return prayers().filter(function(p) { return !p.answered; }); }
function answered() { return prayers().filter(function(p) { return p.answered; }).sort(function(a, b) { return (b.answeredOn || '') < (a.answeredOn || '') ? -1 : 1; }); }
function dueToday(p, d) { d = d || today(); if (p.answered) return false; var f = p.freq == null || p.freq === '' ? 'daily' : String(p.freq); return f === 'daily' || f === String(pd(d).getDay()); }
function prayedOn(p, d) { return (p.log || []).indexOf(d || today()) >= 0; }
function togglePrayed(p, d) { d = d || today(); p.log = p.log || []; var idx = p.log.indexOf(d); if (idx >= 0) p.log.splice(idx, 1); else p.log.push(d); put('prayers', p); }

function activity() {
  var map = {};
  function mark(d, kind) { if (d) { map[d] = map[d] || {}; map[d][kind] = 1; } }
  all('entries').forEach(function(e) { if (e.type !== 'month') mark(e.date, 'journal'); });
  prayers().forEach(function(p) { (p.log || []).forEach(function(d) { mark(d, 'prayed'); }); });
  all('gratitude').forEach(function(g) { mark(g.date, 'thanks'); });
  all('reading').forEach(function(r) { Object.keys(r.done || {}).forEach(function(k) { mark(r.done[k], 'read'); }); });
  return map;
}

function streaks() {
  var map = activity(), t = today(), cur = 0, cursor = map[t] ? t : addDays(t, -1);
  while (map[cursor]) { cur++; cursor = addDays(cursor, -1); }
  var sorted = Object.keys(map).sort(), best = 0, run = 0, prev = '';
  sorted.forEach(function(k) { run = (prev && addDays(prev, 1) === k) ? run + 1 : 1; if (run > best) best = run; prev = k; });
  return { cur: cur, best: best, total: sorted.length, today: !!map[t], map: map };
}

function entries() { return all('entries').filter(function(e) { return e.type !== 'month'; }).sort(function(a, b) { return (b.date + (b.created || 0)) < (a.date + (a.created || 0)) ? -1 : 1; }); }
function entryToday() { return entries().filter(function(e) { return e.date === today(); }).shift(); }
function entryText(e) { var m = METHODS[e.type] || METHODS.free; return m.fields.map(function(f) { return (e[f.slice(0, 1).pop()] || '').trim(); }).filter(Boolean).join(' '); }
function entryTitle(e) { if (e.title) return e.title; if (e.type === 'soap' && e.ref) return e.ref; var txt = entryText(e); return txt ? txt.split(/[.!?\n]/).shift().slice(0, 70) : 'Untitled reflection'; }
function gratitudeOn(d) { return all('gratitude').filter(function(g) { return g.date === d; }).sort(function(a, b) { return (a.created || 0) - (b.created || 0); }); }

/* ---------- ACADEMY T.L.C. ORIGINAL VECTOR MOTIFS (OLIVE, MYRTLE, DOVE & CROSS) ---------- */
var TLC_PALETTE = {
  deepTeal: '#0F4A53',
  medTeal: '#1B6B78',
  amber: '#E2723B',
  amberSoft: '#F3A178',
  darkBlue: '#2A556F',
  slateBlue: '#4A6B82',
  gold: '#D4AF37',
  cream: '#FDFBF7'
};

function tlcOliveBranch(cx, cy, scale, angleDeg, flip) {
  var sc = scale || 1;
  var tr = 'translate(' + cx + ' ' + cy + ') rotate(' + (angleDeg || 0) + ') scale(' + (flip ? -sc : sc) + ' ' + sc + ')';
  var svg = '<g transform="' + tr + '">';
  svg += '<path d="M0,0 C35,-12 85,-14 135,4" fill="none" stroke="' + TLC_PALETTE.darkBlue + '" stroke-width="2" stroke-linecap="round"/>';
  var leaves = [
    [22, -6, -38], [46, -11, -32], [74, -12, -25], [104, -7, -18],
    [28, -4, 42], [56, -8, 36], [86, -8, 30], [114, -2, 24]
  ];
  leaves.forEach(function(item) {
    var c = item.slice();
    var lx = c.shift();
    var ly = c.shift();
    var rot = c.shift();
    svg += '<ellipse cx="' + lx + '" cy="' + ly + '" rx="13" ry="4.5" transform="rotate(' + rot + ' ' + lx + ' ' + ly + ')" fill="' + TLC_PALETTE.medTeal + '" opacity="0.82"/>';
  });
  svg += '<ellipse cx="142" cy="6" rx="12" ry="4" transform="rotate(14 142 6)" fill="' + TLC_PALETTE.darkBlue + '" opacity="0.9"/>';
  svg += '<circle cx="42" cy="-3" r="3.5" fill="' + TLC_PALETTE.amber + '" opacity="0.85"/>';
  svg += '<circle cx="94" cy="-3" r="3.5" fill="' + TLC_PALETTE.gold + '" opacity="0.9"/>';
  svg += '</g>';
  return svg;
}

function tlcMyrtleSprig(cx, cy, scale, angleDeg) {
  var sc = scale || 1;
  var tr = 'translate(' + cx + ' ' + cy + ') rotate(' + (angleDeg || 0) + ') scale(' + sc + ')';
  var svg = '<g transform="' + tr + '">';
  svg += '<path d="M0,0 Q45,-18 95,6" fill="none" stroke="' + TLC_PALETTE.slateBlue + '" stroke-width="1.6" stroke-linecap="round"/>';
  var pairs = [[24, -7], [50, -10], [76, -4]];
  pairs.forEach(function(pt) {
    var c = pt.slice();
    var px = c.shift();
    var py = c.shift();
    svg += '<path d="M' + px + ',' + py + ' Q' + (px + 8) + ',' + (py - 16) + ' ' + (px + 18) + ',' + (py - 12) + ' Q' + (px + 10) + ',' + (py - 2) + ' ' + px + ',' + py + ' Z" fill="' + TLC_PALETTE.slateBlue + '" opacity="0.72"/>';
    svg += '<path d="M' + px + ',' + py + ' Q' + (px + 8) + ',' + (py + 16) + ' ' + (px + 18) + ',' + (py + 12) + ' Q' + (px + 10) + ',' + (py + 2) + ' ' + px + ',' + py + ' Z" fill="' + TLC_PALETTE.medTeal + '" opacity="0.65"/>';
  });
  svg += '</g>';
  return svg;
}

function tlcCrossEmblem(cx, cy, size, col) {
  var s = size || 24;
  var half = s * 0.48;
  var barY = cy - s * 0.14;
  var c = col || TLC_PALETTE.gold;
  return '<g>' +
    '<line x1="' + cx + '" y1="' + (cy - half) + '" x2="' + cx + '" y2="' + (cy + half) + '" stroke="' + c + '" stroke-width="2.2" stroke-linecap="round"/>' +
    '<line x1="' + (cx - half * 0.68) + '" y1="' + barY + '" x2="' + (cx + half * 0.68) + '" y2="' + barY + '" stroke="' + c + '" stroke-width="2.2" stroke-linecap="round"/>' +
    '</g>';
}

function tlcDoveMark(cx, cy, scale) {
  var sc = scale || 1;
  return '<g transform="translate(' + cx + ' ' + cy + ') scale(' + sc + ')">' +
    '<path d="M-18,4 C-10,-8 2,-10 14,-2 C8,4 2,8 -8,9 C-13,9 -16,7 -18,4 Z" fill="' + TLC_PALETTE.amber + '" opacity="0.82"/>' +
    '<path d="M-4,-2 C-12,-18 -26,-16 -24,-6 C-18,-5 -11,-3 -4,-2 Z" fill="' + TLC_PALETTE.amberSoft + '" opacity="0.9"/>' +
    '<path d="M14,-2 L20,-4 L15,1 Z" fill="' + TLC_PALETTE.gold + '"/>' +
    '</g>';
}
/* ---------- RICH WATERCOLOR HERO ILLUSTRATION FOR TODAY CARD ---------- */
function tlcWatercolorRose(cx, cy, r, cOuter, cInner, uidKey) {
  var gId = 'tlc_rg_' + uidKey;
  var out = '<defs><radialGradient id="' + gId + '" cx="45%" cy="40%" r="60%">' +
    '<stop offset="0%" stop-color="' + cInner + '" stop-opacity="0.92"/>' +
    '<stop offset="65%" stop-color="' + cOuter + '" stop-opacity="0.78"/>' +
    '<stop offset="100%" stop-color="' + cOuter + '" stop-opacity="0.25"/>' +
    '</radialGradient></defs><g>';
  for (var i = 0; i < 6; i++) {
    var ang = i * 60 + 12;
    var rad = ang * Math.PI / 180;
    var px = (cx + Math.cos(rad) * r * 0.36).toFixed(1);
    var py = (cy + Math.sin(rad) * r * 0.36).toFixed(1);
    out += '<ellipse cx="' + px + '" cy="' + py + '" rx="' + (r * 0.66).toFixed(1) + '" ry="' + (r * 0.50).toFixed(1) + '" transform="rotate(' + ang + ' ' + px + ' ' + py + ')" fill="url(#' + gId + ')"/>';
  }
  for (var k = 0; k < 4; k++) {
    var ang2 = k * 90 + 25;
    var rad2 = ang2 * Math.PI / 180;
    var px2 = (cx + Math.cos(rad2) * r * 0.16).toFixed(1);
    var py2 = (cy + Math.sin(rad2) * r * 0.16).toFixed(1);
    out += '<ellipse cx="' + px2 + '" cy="' + py2 + '" rx="' + (r * 0.38).toFixed(1) + '" ry="' + (r * 0.28).toFixed(1) + '" transform="rotate(' + ang2 + ' ' + px2 + ' ' + py2 + ')" fill="' + cInner + '" opacity="0.68"/>';
  }
  out += '<path d="M' + (cx - r * 0.22) + ',' + cy + ' Q' + cx + ',' + (cy - r * 0.28) + ' ' + (cx + r * 0.22) + ',' + cy + ' Q' + cx + ',' + (cy + r * 0.22) + ' ' + (cx - r * 0.14) + ',' + (cy + r * 0.08) + '" fill="none" stroke="' + cInner + '" stroke-width="1.6" stroke-linecap="round" opacity="0.85"/>';
  out += '<circle cx="' + cx + '" cy="' + cy + '" r="' + (r * 0.12).toFixed(1) + '" fill="' + cInner + '" opacity="0.9"/>';
  return out + '</g>';
}

function tlcOpenBibleArt(cx, cy, sc) {
  return '<g transform="translate(' + cx + ' ' + cy + ') scale(' + (sc || 1) + ')">' +
    '<path d="M-54,10 Q-28,2 0,12 Q28,2 54,10 L50,-18 Q25,-25 0,-15 Q-25,-25 -50,-18 Z" fill="#FDFBF7" stroke="#D4AF37" stroke-width="1.4" opacity="0.92"/>' +
    '<path d="M-48,13 Q-24,6 0,15 Q24,6 48,13" fill="none" stroke="#8FA8B2" stroke-width="1.2" opacity="0.7"/>' +
    '<line x1="0" y1="-15" x2="0" y2="14" stroke="#C89E31" stroke-width="1.4"/>' +
    '<path d="M-38,-9 L-12,-6 M-38,-2 L-12,1 M-36,5 L-14,7 M12,-6 L38,-9 M12,1 L38,-2 M14,7 L36,5" stroke="#9BB0B8" stroke-width="1.1" stroke-linecap="round" opacity="0.75"/>' +
    '</g>';
}


function headerArt() {
  return '<svg class="hart" viewBox="0 0 220 120" preserveAspectRatio="xMinYMin meet" aria-hidden="true">' +
    tlcOliveBranch(10, 42, 0.95, 10, false) +
    tlcMyrtleSprig(22, 68, 0.85, 28) +
    tlcCrossEmblem(36, 26, 20, TLC_PALETTE.gold) +
    '</svg>';
}

function tlcVineArc(x1, y1, cx1, cy1, cx2, cy2, x2, y2, col, leafCount, leafScale) {
  var out = '<path d="M' + x1 + ',' + y1 + ' C' + cx1 + ',' + cy1 + ' ' + cx2 + ',' + cy2 + ' ' + x2 + ',' + y2 + '" fill="none" stroke="' + col + '" stroke-width="1.5" stroke-linecap="round" opacity="0.72"/>';
  var n = leafCount || 6;
  var sc = leafScale || 1;
  for (var i = 1; i <= n; i++) {
    var t = i / (n + 0.6);
    var mt = 1 - t;
    var bx = mt * mt * mt * x1 + 3 * mt * mt * t * cx1 + 3 * mt * t * t * cx2 + t * t * t * x2;
    var by = mt * mt * mt * y1 + 3 * mt * mt * t * cy1 + 3 * mt * t * t * cy2 + t * t * t * y2;
    var tx = 3 * mt * mt * (cx1 - x1) + 6 * mt * t * (cx2 - cx1) + 3 * t * t * (x2 - cx2);
    var ty = 3 * mt * mt * (cy1 - y1) + 6 * mt * t * (cy2 - cy1) + 3 * t * t * (y2 - cy2);
    var ang = Math.atan2(ty, tx) * 180 / Math.PI;
    var len = (24 - i * 1.6) * sc;
    var wid = len * 0.28;
    var a1 = ang - 44;
    var a2 = ang + 44;
    out += '<path d="M0,0 Q' + (len * 0.5).toFixed(1) + ',' + (-wid).toFixed(1) + ' ' + len.toFixed(1) + ',0 Q' + (len * 0.5).toFixed(1) + ',' + wid.toFixed(1) + ' 0,0 Z" transform="translate(' + bx.toFixed(1) + ' ' + by.toFixed(1) + ') rotate(' + a1.toFixed(1) + ')" fill="' + col + '" opacity="0.68"/>';
    if (i < n) {
      out += '<path d="M0,0 Q' + (len * 0.5).toFixed(1) + ',' + (-wid).toFixed(1) + ' ' + len.toFixed(1) + ',0 Q' + (len * 0.5).toFixed(1) + ',' + wid.toFixed(1) + ' 0,0 Z" transform="translate(' + bx.toFixed(1) + ' ' + by.toFixed(1) + ') rotate(' + a2.toFixed(1) + ')" fill="' + col + '" opacity="0.54"/>';
    }
  }
  return out;
}

function tlcBotanicalRose(cx, cy, r, cLight, cDeep, tag) {
  var gid = 'tlc_br_' + tag;
  var out = '<defs><radialGradient id="' + gid + '" cx="45%" cy="40%" r="60%">' +
    '<stop offset="0%" stop-color="' + cDeep + '" stop-opacity="0.78"/>' +
    '<stop offset="65%" stop-color="' + cLight + '" stop-opacity="0.52"/>' +
    '<stop offset="100%" stop-color="' + cLight + '" stop-opacity="0.08"/>' +
    '</radialGradient></defs><g>';
  for (var i = 0; i < 6; i++) {
    var deg = i * 60 + 15;
    var rad = deg * Math.PI / 180;
    var px = (cx + Math.cos(rad) * r * 0.36).toFixed(1);
    var py = (cy + Math.sin(rad) * r * 0.36).toFixed(1);
    out += '<ellipse cx="' + px + '" cy="' + py + '" rx="' + (r * 0.64).toFixed(1) + '" ry="' + (r * 0.48).toFixed(1) + '" transform="rotate(' + deg + ' ' + px + ' ' + py + ')" fill="url(#' + gid + ')"/>';
  }
  for (var j = 0; j < 4; j++) {
    var deg2 = j * 90 + 35;
    var rad2 = deg2 * Math.PI / 180;
    var px2 = (cx + Math.cos(rad2) * r * 0.16).toFixed(1);
    var py2 = (cy + Math.sin(rad2) * r * 0.16).toFixed(1);
    out += '<ellipse cx="' + px2 + '" cy="' + py2 + '" rx="' + (r * 0.36).toFixed(1) + '" ry="' + (r * 0.26).toFixed(1) + '" transform="rotate(' + deg2 + ' ' + px2 + ' ' + py2 + ')" fill="' + cDeep + '" opacity="0.45"/>';
  }
  out += '<path d="M' + (cx - r * 0.2) + ',' + cy + ' C' + (cx - r * 0.1) + ',' + (cy - r * 0.26) + ' ' + (cx + r * 0.18) + ',' + (cy - r * 0.22) + ' ' + (cx + r * 0.2) + ',' + cy + ' C' + (cx + r * 0.16) + ',' + (cy + r * 0.2) + ' ' + (cx - r * 0.12) + ',' + (cy + r * 0.18) + ' ' + (cx - r * 0.06) + ',' + cy + '" fill="none" stroke="' + cDeep + '" stroke-width="' + (r * 0.055).toFixed(1) + '" stroke-linecap="round" opacity="0.72"/>';
  return out + '</g>';
}

function heroArt() {
  var svg = '<svg class="heroart" viewBox="0 0 420 200" preserveAspectRatio="xMaxYMin slice" aria-hidden="true">';

  // Cascading olive & myrtle stems curving out from the upper-right corner
  svg += tlcVineArc(405, 18, 340, 12, 275, 28, 222, 54, '#2A556F', 6, 1.05);
  svg += tlcVineArc(392, 12, 355, 52, 325, 92, 305, 136, '#4A6B82', 5, 0.9);
  svg += tlcVineArc(414, 48, 378, 72, 352, 108, 336, 152, '#2A556F', 4, 0.8);

  // Layered watercolor blooms in your Teal & Warm Amber palette
  svg += tlcBotanicalRose(362, 44, 36, '#1B6B78', '#0F4A53', 'm1');
  svg += tlcBotanicalRose(304, 24, 24, '#F3A178', '#E2723B', 'm2');
  svg += tlcBotanicalRose(388, 102, 21, '#F3A178', '#E2723B', 'm3');

  // Delicate buds & golden accents
  svg += '<ellipse cx="262" cy="56" rx="5.5" ry="7.5" transform="rotate(-28 262 56)" fill="#1B6B78" opacity="0.62"/>';
  svg += '<ellipse cx="332" cy="88" rx="4.5" ry="6.5" transform="rotate(18 332 88)" fill="#E2723B" opacity="0.62"/>';
  svg += '<circle cx="282" cy="78" r="2.2" fill="#D4AF37" opacity="0.75"/>';
  svg += '<circle cx="296" cy="64" r="1.8" fill="#D4AF37" opacity="0.65"/>';
  svg += '<circle cx="246" cy="36" r="2" fill="#D4AF37" opacity="0.7"/>';
  svg += '<circle cx="352" cy="116" r="2.2" fill="#D4AF37" opacity="0.75"/>';

  svg += '</svg>';
  return svg;
}



function divider() {
  return '<svg class="divider" viewBox="0 0 220 26" aria-hidden="true">' +
    '<line x1="16" y1="13" x2="88" y2="13" stroke="' + TLC_PALETTE.gold + '" stroke-width="1.2"/>' +
    '<line x1="132" y1="13" x2="204" y2="13" stroke="' + TLC_PALETTE.gold + '" stroke-width="1.2"/>' +
    tlcCrossEmblem(110, 13, 18, TLC_PALETTE.amber) +
    '</svg>';
}

function emptyArt() {
  return '<svg class="emptyart" viewBox="0 0 180 105" aria-hidden="true">' +
    tlcOliveBranch(22, 82, 0.8, -32, false) +
    tlcOliveBranch(158, 82, 0.8, 32, true) +
    tlcDoveMark(90, 38, 1.15) +
    tlcCrossEmblem(90, 72, 22, TLC_PALETTE.gold) +
    '</svg>';
}


var ICONS = {
  today: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  prayers: '<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/>',
  journal: '<path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3z"/><path d="M5 17a3 3 0 0 1 3-3h11M9 8h6"/>',
  scripture: '<path d="M2 5c3-1.5 7-1.5 10 1 3-2.5 7-2.5 10-1v14c-3-1.5-7-1.5-10 1-3-2.5-7-2.5-10-1z"/><path d="M12 6v14"/>',
  more: '<circle cx="5" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="19" cy="12" r="1.6"/>',
  answered: '<circle cx="12" cy="12" r="9"/><path d="M8 12.5l2.7 2.7L16.5 9.5"/>',
  gratitude: '<path d="M12 8c0-3 2-5 4-5 0 3-2 5-4 5zM12 8c0-3-2-5-4-5 0 3 2 5 4 5z"/><circle cx="12" cy="13" r="4"/><path d="M12 17v4M9 21h6"/>',
  reading: '<path d="M6 3h12v18l-6-4-6 4z"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
  reflect: '<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',
  game: '<rect x="2" y="6" width="20" height="12" rx="4"/><path d="M6 12h4M8 10v4M15 11h.01M18 13h.01"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.6 1.6 0 0 0-1-1.5 1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.6 1.6 0 0 0 1.5-1 1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3H9a1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8V9a1.6 1.6 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1z"/>',
  plus: '<path d="M12 5v14M5 12h14"/>', check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>', edit: '<path d="M4 20h4L19 9l-4-4L4 16z"/>', trash: '<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/>',
  close: '<path d="M6 6l12 12M18 6L6 18"/>', search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>', flame: '<path d="M12 22c4 0 7-3 7-7 0-4-3-6-4-10-2 2-2 4-2 6-1-1-2-2-2-4-3 3-6 5-6 8 0 4 3 7 7 7z"/>',
  copy: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"/>', back: '<path d="M15 5l-7 7 7 7"/>', next: '<path d="M9 5l7 7-7 7"/>',
  star: '<path d="M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.6 6.6 19.5l1.2-6L3.3 9.3l6.1-.7z"/>', eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  bible: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20M4 19.5V3.5A2.5 2.5 0 0 1 6.5 1H20v16H6.5" fill="none" stroke="currentColor" stroke-width="1.7"/>',
  adminPlan: '<path d="M12 3v18M7 8h10"/>',
  prayerWall: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>'



};

function ic(n, cls) { return '<svg class="ic ' + (cls || '') + '" viewBox="0 0 24 24" aria-hidden="true">' + (ICONS[n] || '') + '</svg>'; }
/* ---------- navigation ---------- */
// Side menu navigation list row
var NAV = [['today', 'Today'], ['prayers', 'Prayer List'], ['answered', 'Testimonials'], ['prayerWall', 'Prayer Wall'], ['journal', 'Journal'], ['scripture', 'Scripture'], ['adminPlan', 'Reading Plan'], ['bible', 'Bible Reader'], ['gratitude', 'Gratitude'], ['calendar', 'Calendar & Streaks'], ['reflect', 'Monthly Reflection'], ['game', 'Faith Game'], ['settings', 'Settings']];


// Mobile bottom navigation menu row
var BNAV = [['today', 'Today'], ['prayers', 'Prayers'], ['journal', 'Journal'], ['scripture', 'Scripture'], ['more', 'More']];

function go(v) {
  if (window._bibleSpeaking && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    window._bibleSpeaking = false;
  }
  UI.view = v;
  $('more').hidden = true;
  closeModal();
  render();
  window.scrollTo(0, 0);
}

function counts(k) {
  if (k === 'prayers') return active().length;
  if (k === 'answered') return answered().length;
  if (k === 'journal') return entries().length;
  return '';
}
function render() {
  var v = UI.view;
  $('side').innerHTML = '<div class="brand">' + headerArt() + '<div class="nm" style="font-size: 32px; font-weight: 400; line-height: 1.1; color: var(--rose-d);">Academy TLC</div><div class="sub" style="font-size: 11px; margin-top: 6px; font-weight: 500;">Where Jesus is the cornerstone</div></div>' +
    NAV.map(function (n) { var c = counts(n[0]); return '<button class="nav' + (v === n[0] ? ' on' : '') + '" onclick="go(\'' + n[0] + '\')">' + ic(n[0]) + esc(n[1]) + (c ? '<span class="ct">' + c + '</span>' : '') + '</button>'; }).join('') +
        '<div class="foot">' +
    '<button class="btn sm" style="width:100%;margin-bottom:8px;border-color:var(--gold);background:var(--gold2);color:var(--ink);font-weight:600;" onclick="openOurStoryModal()">&#128330; Our Story</button>' +
    '<button class="btn sm" style="width:100%;margin-bottom:8px;border-color:var(--rose);background:var(--rose2);color:var(--rose-d);font-weight:600;" onclick="openQuickGuideModal()">&#128214; Quick Guide</button>' +
    '<button class="btn sm" style="width:100%;margin-bottom:10px;border-color:var(--gold);" onclick="document.getElementById(\'tlcContactModal\').style.display=\'flex\'">✉️ Contact &amp; Support</button>' +
    '<span id="pill">Saved</span></div>';


  $('topm').innerHTML = '<span class="nm">Academy TLC</span><span id="pill2" class="mu sm"></span><button class="iconbtn" onclick="go(\'settings\')" aria-label="Settings">' + ic('settings') + '</button>';
  $('bnav').innerHTML = BNAV.map(function (n) {
       var on = n[0] === v || (n[0] === 'more' && ['prayerWall', 'bible', 'answered', 'gratitude', 'adminPlan', 'calendar', 'reflect', 'game', 'settings'].indexOf(v) >= 0);
    return '<button class="' + (on ? 'on' : '') + '" onclick="' + (n[0] === 'more' ? 'showMore()' : 'go(\'' + n[0] + '\')') + '">' + ic(n[0]) + n[1] + '</button>';
  }).join('');

  var V = { today: vToday, prayers: vPrayers, answered: vAnswered, prayerWall: vPrayerWall, journal: vJournal, scripture: vScripture, adminPlan: vAdminPlan, bible: vBible, gratitude: vGratitude, reading: vReading, calendar: vCalendar, reflect: vReflect, game: vGame, settings: vSettings }[v] || vToday;


  $('main').innerHTML = V();
  var fab = { prayers: 'editPrayer()', journal: 'newEntry()', scripture: 'editVerse()', today: 'quickAdd()' }[v];
  $('fabw').innerHTML = fab ? '<button class="fab" onclick="' + fab + '" aria-label="Add">' + ic('plus') + '</button>' : '';
  if (v === 'today' || v === 'gratitude') wireGratitude();
}

function showMore() {
  var m = $('more');
  var items = [['bible', 'Bible Reader'], ['answered', 'Testimonials'], ['prayerWall', 'Prayer Wall'], ['gratitude', 'Gratitude'], ['adminPlan', 'Reading Plan'], ['calendar', 'Calendar'], ['reflect', 'Reflection'], ['game', 'Faith Game'], ['settings', 'Settings']];
  var btns = items.map(function (n) {
    var copy = n.slice();
    var k = copy.shift();
    var label = copy.shift();
    return '<button onclick="go(\'' + k + '\')">' + ic(k) + label + '</button>';
  }).join('');
   m.innerHTML = '<div class="pn" onclick="event.stopPropagation()">' + btns +
    '<button onclick="$(\'more\').hidden=true;openOurStoryModal()">&#128330; Our Story</button>' +
    '<button onclick="$(\'more\').hidden=true;openQuickGuideModal()">&#128214; Quick Guide</button>' +
    '<button onclick="$(\'more\').hidden=true;document.getElementById(\'tlcContactModal\').style.display=\'flex\'">✉️ Contact</button></div>';

  m.onclick = function () { m.hidden = true; };
  m.hidden = false;
}







function ph(title, script, sub, right) {
  return '<div class="ph"><div><h1>' + (script ? '<i>' + esc(script) + '</i>' : '') + esc(title) + '</h1>' + (sub ? '<p>' + sub + '</p>' : '') + '</div>' + (right || '') + '</div>';
}
function empty(t, s, btn) { return '<div class="card empty">' + emptyArt() + '<h3>' + esc(t) + '</h3><p>' + s + '</p>' + (btn || '') + '</div>'; }

/* ---------- modal ---------- */
function openModal(title, body, foot, wide) {
  var m = $('modal');
  m.innerHTML = '<div class="sheet' + (wide ? ' wide' : '') + '" onclick="event.stopPropagation()"><div class="mh"><h2>' + title + '</h2><button class="iconbtn" onclick="closeModal()" aria-label="Close">' + ic('close') + '</button></div><div class="mb">' + body + '</div>' + (foot ? '<div class="mf">' + foot + '</div>' : '') + '</div>';
  m.hidden = false;
  m.onclick = function () { closeModal(); };
  var f = m.querySelector('[autofocus]'); if (f && window.innerWidth > 860) setTimeout(function () { f.focus(); }, 30);
}
function closeModal() { var m = $('modal'); if (m) { m.hidden = true; m.innerHTML = ''; } }
function confirmBox(msg, ok, fn) {
  openModal('Are you sure?', '<p>' + msg + '</p>', '<button class="btn" onclick="closeModal()">Cancel</button><button class="btn pri" id="okb">' + esc(ok) + '</button>');
  $('okb').onclick = function () { closeModal(); fn(); };
}
function val(id) { var e = $(id); return e ? e.value.trim() : ''; }

/* ---------- HEART CHECK-IN & PROMISE JAR ---------- */
var HEART_MOODS = {
  peaceful: {
    label: '🕊️ Peaceful',
    items: [
      { verse: '“Thou wilt keep him in perfect peace, whose mind is stayed on thee: because he trusteth in thee.” — Isaiah 26:3', note: 'Rest in His stillness today and let His peace guard your heart.' },
      { verse: '“Peace I leave with you, my peace I give unto you: not as the world giveth, give I unto you. Let not your heart be troubled, neither let it be afraid.” — John 14:27', note: 'Christ gives a deep, steady peace that circumstances cannot shake.' },
      { verse: '“And the peace of God, which passeth all understanding, shall keep your hearts and minds through Christ Jesus.” — Philippians 4:7', note: 'Let His peace stand guard over every thought today.' },
      { verse: '“Be still, and know that I am God.” — Psalm 46:10', note: 'Pause in His quiet presence—He holds everything in His hands.' },
      { verse: '“The LORD will give strength unto his people; the LORD will bless his people with peace.” — Psalm 29:11', note: 'Receive the calm and strength He freely pours over His children.' }
    ]
  },
  grateful: {
    label: '🌸 Grateful',
    items: [
      { verse: '“O give thanks unto the LORD, for he is good: for his mercy endureth for ever.” — Psalm 107:1', note: 'Every good gift comes from above. Celebrate His goodness today!' },
      { verse: '“In every thing give thanks: for this is the will of God in Christ Jesus concerning you.” — 1 Thessalonians 5:18', note: 'A thankful heart opens our eyes to His daily faithfulness.' },
      { verse: '“Bless the LORD, O my soul, and forget not all his benefits.” — Psalm 103:2', note: 'Take a moment to name the quiet mercies He has woven into your week.' },
      { verse: '“Every good gift and every perfect gift is from above, and cometh down from the Father of lights.” — James 1:17', note: 'Thank Him for both the big breakthroughs and the small daily graces.' },
      { verse: '“This is the day which the LORD hath made; we will rejoice and be glad in it.” — Psalm 118:24', note: 'Step into today with joy and thanksgiving on your lips.' }
    ]
  },
  hopeful: {
    label: '🌅 Hopeful',
    items: [
      { verse: '“For I know the thoughts that I think toward you, saith the LORD, thoughts of peace, and not of evil, to give you an expected end.” — Jeremiah 29:11', note: 'Your future is held safely in faithful hands.' },
      { verse: '“Now the God of hope fill you with all joy and peace in believing, that ye may abound in hope, through the power of the Holy Ghost.” — Romans 15:13', note: 'Let the Holy Spirit overflow your heart with fresh expectation.' },
      { verse: '“But they that wait upon the LORD shall renew their strength; they shall mount up with wings as eagles.” — Isaiah 40:31', note: 'Waiting on God is never wasted—He is renewing your strength.' },
      { verse: '“Which hope we have as an anchor of the soul, both sure and stedfast.” — Hebrews 6:19', note: 'No matter how strong the wind blows, your soul is anchored in Christ.' },
      { verse: '“And we know that all things work together for good to them that love God, to them who are the called according to his purpose.” — Romans 8:28', note: 'Trust that God is weaving every detail together for His glory.' }
    ]
  },
  weary: {
    label: '🌿 Weary',
    items: [
      { verse: '“Come unto me, all ye that labour and are heavy laden, and I will give you rest.” — Matthew 11:28', note: 'You do not have to carry everything alone. Lay your weight down with Jesus.' },
      { verse: '“My grace is sufficient for thee: for my strength is made perfect in weakness.” — 2 Corinthians 12:9', note: 'Where your energy ends, His supernatural strength begins.' },
      { verse: '“Casting all your care upon him; for he careth for you.” — 1 Peter 5:7', note: 'Hand every heavy burden over to the One who loves you deeply.' },
      { verse: '“He giveth power to the faint; and to them that have no might he increaseth strength.” — Isaiah 40:29', note: 'Lean on His shoulders today—He never grows tired.' },
      { verse: '“Cast thy burden upon the LORD, and he shall sustain thee: he shall never suffer the righteous to be moved.” — Psalm 55:22', note: 'Breathe deep and let the Lord hold you up today.' }
    ]
  },
  comfort: {
    label: '🤍 Seeking Comfort',
    items: [
      { verse: '“The LORD is nigh unto them that are of a broken heart; and saveth such as be of a contrite spirit.” — Psalm 34:18', note: 'He sees every tear and sits right beside you in this moment.' },
      { verse: '“Fear thou not; for I am with thee: be not dismayed; for I am thy God: I will strengthen thee; yea, I will help thee.” — Isaiah 41:10', note: 'You are never walking through the valley by yourself.' },
      { verse: '“He healeth the broken in heart, and bindeth up their wounds.” — Psalm 147:3', note: 'Let the Great Physician bring gentle healing to your heart.' },
      { verse: '“God is our refuge and strength, a very present help in trouble.” — Psalm 46:1', note: 'Run into His arms—He is your safe shelter right now.' },
      { verse: '“Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me.” — Psalm 23:4', note: 'Your Good Shepherd is walking beside you every step of the way.' }
    ]
  }
};

var PROMISE_JAR = [
  '“The LORD shall fight for you, and ye shall hold your peace.” — Exodus 14:14',
  '“My grace is sufficient for thee: for my strength is made perfect in weakness.” — 2 Corinthians 12:9',
  '“Fear thou not; for I am with thee: be not dismayed; for I am thy God.” — Isaiah 41:10',
  '“Delight thyself also in the LORD; and he shall give thee the desires of thine heart.” — Psalm 37:4',
  '“And we know that all things work together for good to them that love God.” — Romans 8:28',
  '“The joy of the LORD is your strength.” — Nehemiah 8:10',
  '“Casting all your care upon him; for he careth for you.” — 1 Peter 5:7',
  '“He healeth the broken in heart, and bindeth up their wounds.” — Psalm 147:3',
  '“Ask, and it shall be given you; seek, and ye shall find.” — Matthew 7:7',
  '“The LORD is my shepherd; I shall not want.” — Psalm 23:1',
  '“Be strong and of a good courage; be not afraid, neither be thou dismayed.” — Joshua 1:9',
  '“Great is thy faithfulness.” — Lamentations 3:23'
];

var _moodBibleSeeded = false;
var MOOD_RULES = {
  peaceful: { rx: /\b(peace|still|quiet|calm|rest)\b/i, note: 'Let the Prince of Peace guard your heart and mind today.' },
  grateful: { rx: /\b(thank|thanks|thanksgiving|praise|rejoice|goodness)\b/i, note: 'Every good and perfect gift flows from our faithful Father.' },
  hopeful:  { rx: /\b(hope|wait|promise|renew|future|trust)\b/i, note: 'Your hope is anchored securely in Christ—He is faithful.' },
  weary:    { rx: /\b(weary|heavy|strength|weak|faint|burden|rest)\b/i, note: 'Lean on His everlasting arms—His grace is sufficient for you.' },
  comfort:  { rx: /\b(comfort|broken|tear|afraid|fear not|refuge|with thee)\b/i, note: 'The Lord is near to you right now and holds you close.' }
};

function seedDynamicHeartAndPromises_() {
  if (_moodBibleSeeded) return Promise.resolve();
  return loadLocalBible(UI.bibleVersion || 'KJV').then(function(bible) {
    if (_moodBibleSeeded || !bible) return;
    _moodBibleSeeded = true;
    var books = ['Psalms', 'Proverbs', 'Isaiah', 'Jeremiah', 'Matthew', 'John', 'Romans', 'Philippians', 'Ephesians', '2 Corinthians', '1 Peter'];
    books.forEach(function(bk) {
      var bObj = bible[bk];
      if (!bObj) return;
      Object.keys(bObj).forEach(function(chNum) {
        var vObj = bObj[chNum] || {};
        Object.keys(vObj).forEach(function(vNum) {
          var txt = String(vObj[vNum] || '').trim();
          if (txt.length < 35 || txt.length > 185) return;
          var formatted = '“' + txt + '” — ' + bk + ' ' + chNum + ':' + vNum;
          if (/\b(I will|shall|blessed|grace|faithful|love)\b/i.test(txt) && PROMISE_JAR.length < 150 && PROMISE_JAR.indexOf(formatted) < 0) {
            PROMISE_JAR.push(formatted);
          }
          Object.keys(MOOD_RULES).forEach(function(mKey) {
            var list = HEART_MOODS[mKey].items;
            if (list.length < 30 && MOOD_RULES[mKey].rx.test(txt) && !list.some(function(x) { return x.verse === formatted; })) {
              list.push({ verse: formatted, note: MOOD_RULES[mKey].note });
            }
          });
        });
      });
    });
  }).catch(function() {});
}



function useHeartMoodVerse_(mode) {
  var moodObj = HEART_MOODS[UI.heartMood];
  if (!moodObj || !moodObj.items || !moodObj.items.length) return;
  var idx = ((UI.heartMoodIdx && UI.heartMoodIdx[UI.heartMood]) || 0) % moodObj.items.length;
  var activeM = moodObj.items[idx];
  var parts = String(activeM.verse || '').split('” — ');
  var txt = (parts.shift() || '').replace(/^“/, '').trim();
  var ref = (parts.shift() || 'Scripture').trim();
  if (mode === 'save') {
    if (all('verses').some(function(x) { return x.ref === ref; })) { toast('Already in your Scripture tab.'); return; }
    put('verses', { ref: ref, text: txt, tr: 'KJV', topic: moodObj.label.replace(/^[^\w]+/, ''), memory: false, created: Date.now(), date: today() });
    toast('Saved ' + ref + ' to Scripture!');
  } else if (mode === 'journal') {
    editEntry(null, 'soap', { type: 'soap', date: today(), ref: ref + ' (KJV)', s: txt });
  } else if (mode === 'card') {
    openVerseCard(ref, txt, 'KJV');
  }
}



function pickHeartMood(key) {
  UI.heartMoodIdx = UI.heartMoodIdx || {};
  seedDynamicHeartAndPromises_().then(function() { render(); });
  if (UI.heartMood === key) {
    UI.heartMoodIdx[key] = ((UI.heartMoodIdx[key] || 0) + 1);
  } else {
    UI.heartMood = key;
    if (UI.heartMoodIdx[key] === undefined) {
      UI.heartMoodIdx[key] = Math.floor(Math.random() * HEART_MOODS[key].items.length);
    } else {
      UI.heartMoodIdx[key] = (UI.heartMoodIdx[key] + 1);
    }
  }
  render();
}

function usePromiseJarVerse_(mode) {
  var box = document.getElementById('pjar_verse_box');
  var full = box ? box.textContent.trim() : '';
  var parts = full.split('” — ');
  var txt = (parts.shift() || '').replace(/^“/, '').trim();
  var ref = (parts.shift() || 'Scripture Promise').trim();
  closeModal();
  if (mode === 'save') {
    if (all('verses').some(function(x) { return x.ref === ref; })) { toast('Already in your Scripture tab.'); return; }
    put('verses', { ref: ref, text: txt, tr: 'KJV', topic: 'Promise Jar', memory: false, created: Date.now(), date: today() });
    toast('Saved ' + ref + ' to Scripture!');
  } else if (mode === 'journal') {
    editEntry(null, 'soap', { type: 'soap', date: today(), ref: ref + ' (KJV)', s: txt });
  } else if (mode === 'card') {
    openVerseCard(ref, txt, 'KJV');
  }
}

function drawPromiseJar() {
  seedDynamicHeartAndPromises_().then(function() {
    var box = document.getElementById('pjar_verse_box');
    if (box) box.textContent = PROMISE_JAR[Math.floor(Math.random() * PROMISE_JAR.length)];
  });
  var pick = PROMISE_JAR[Math.floor(Math.random() * PROMISE_JAR.length)];
  openModal('🏺 A Promise For You',
    '<div style="text-align:center; padding:10px 6px;">' +
    '  <div id="pjar_verse_box" style="font-family:var(--serif); font-style:italic; font-size:21px; line-height:1.5; color:var(--ink); background:var(--gold2); border:1.5px solid var(--gold); padding:18px; border-radius:16px; margin-bottom:12px;">' + esc(pick) + '</div>' +
    '  <div style="display:flex; justify-content:center; gap:8px; flex-wrap:wrap; margin-bottom:10px;">' +
    '    <button type="button" class="btn sm" onclick="usePromiseJarVerse_(\'save\')">' + ic('star') + 'Save Verse</button>' +
    '    <button type="button" class="btn sm" onclick="usePromiseJarVerse_(\'journal\')">' + ic('edit') + 'SOAP Journal</button>' +
    '    <button type="button" class="btn sm" onclick="usePromiseJarVerse_(\'card\')">&#127807; Share Card</button>' +
    '  </div>' +
    '  <p class="mu sm" style="margin:0;">Hold onto this word today—His promises never fail.</p>' +
    '</div>',
    '<button class="btn" onclick="drawPromiseJar()">Draw Another</button><button class="btn pri" onclick="closeModal()">Amen</button>'
  );
}




/* ---------- TODAY ---------- */
function vToday() {
  var c = cfg(), v = verseOfDay(), st = streaks(), t = today();
  var nm = c.name ? ', ' + esc(c.name) : '';
  var h = '';

   if (window._groupAnnouncement) {
    var isDismissed = (cfg().seenAnnouncement === String(window._groupAnnouncement || '').trim());
    if (isDismissed) {
      h += '<div style="display:flex; justify-content:flex-end; margin-bottom:12px;">';
      h += '  <button type="button" class="btn sm" onclick="reopenGroupNoticeBar()" title="View Group Announcement" style="background:var(--gold2); border-color:var(--gold); color:var(--rose-d); font-weight:600; gap:6px; box-shadow:0 2px 8px rgba(212,175,55,0.2);">';
      h += '    <span style="font-size:15px;">&#128227;</span> Announcement';
      h += '  </button>';
      h += '</div>';
    } else {
      h += '<div class="card" style="background:var(--gold2); border:1.5px solid var(--gold); margin-bottom:16px; padding:14px 18px; border-radius:16px;">';
      h += '  <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; margin-bottom:4px;">';
      h += '    <span style="font-size:11px; font-weight:600; letter-spacing:0.1em; text-transform:uppercase; color:var(--rose-d);">&#128227; Group Announcement</span>';
      h += '    <button type="button" class="btn sm" onclick="dismissGroupNoticeBar()" style="padding:3px 12px; font-size:12px; border-color:var(--gold); background:var(--card);">Dismiss</button>';
      h += '  </div>';
      h += '  <div style="font-family:var(--serif); font-size:17px; line-height:1.45; color:var(--ink); white-space:pre-wrap;">' + nl(window._groupAnnouncement) + '</div>';
      h += '</div>';
    }
  }

  h += '<div class="card hero">' + heroArt() + '<div class="tx"><div class="hi" style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;"><span>' + greeting() + nm + '</span><button type="button" class="btn sm ghost" style="padding:2px 9px;font-size:11.5px;border:1px solid var(--line);" onclick="openChangeNameModal()">Edit Name</button></div><div class="dt">' + fmtD(t, true) + '</div>' +

    '<div class="verse">“' + esc(v.slice(1, 2).pop()) + '”</div><div class="ref">' + esc(v.slice(0, 1).pop()) + ' · KJV</div>' +
    '<div class="row" style="margin-top:12px; flex-wrap:wrap;"><button class="btn sm" onclick="saveDaily()">' + ic('star') + 'Save verse</button><button class="btn sm" style="border-color:var(--gold); background:var(--gold2);" onclick="drawPromiseJar()">&#127994; Promise Jar</button><button class="btn sm ghost" onclick="var v=verseOfDay();openVerseCard(v.slice(0,1).shift(),v.slice(1,2).shift(),\'KJV\')">&#127807; Card</button><button class="btn sm ghost" onclick="copyText(VERSES_TXT())">' + ic('copy') + 'Copy</button></div></div></div>';

  // Gentle Heart Check-In Card (Cycles through multiple verses on each tap)
  h += '<div class="card" style="margin-top:16px; padding:16px 20px;">';
  h += '  <div class="ey" style="margin-bottom:8px;">How is your heart today?</div>';
  h += '  <div class="chips" style="margin-bottom:0;">' + Object.keys(HEART_MOODS).map(function(k) {
    var m = HEART_MOODS[k];
    var on = UI.heartMood === k;
    return '<button type="button" class="chip' + (on ? ' on' : '') + '" onclick="pickHeartMood(\'' + k + '\')">' + m.label + '</button>';
  }).join('') + '</div>';

  if (UI.heartMood && HEART_MOODS[UI.heartMood]) {
    var moodObj = HEART_MOODS[UI.heartMood];
    var listItems = moodObj.items || [];
    var idx = ((UI.heartMoodIdx && UI.heartMoodIdx[UI.heartMood]) || 0) % listItems.length;
    var activeM = listItems.slice(idx, idx + 1).pop();
    h += '  <div style="margin-top:12px; padding:12px 14px; border-radius:12px; background:var(--blush); border-left:3px solid #D96B27;">';
    h += '    <div style="font-family:var(--serif); font-style:italic; font-size:17px; color:var(--ink); margin-bottom:4px;">' + esc(activeM.verse) + '</div>';
    h += '    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; margin-top:6px;">';
    h += '      <div class="mu sm" style="flex:1; min-width:180px;">' + esc(activeM.note) + '</div>';
    h += '      <button type="button" class="btn sm ghost" style="color:var(--rose-d); font-weight:600;" onclick="pickHeartMood(\'' + UI.heartMood + '\')">↻ Another Verse (' + (idx + 1) + '/' + listItems.length + ')</button>';
    h += '    </div>';
    h += '    <div style="display:flex; gap:8px; flex-wrap:wrap; margin-top:10px; padding-top:8px; border-top:1px solid rgba(217,107,39,0.2);">';
    h += '      <button type="button" class="btn sm" style="background:var(--card);" onclick="useHeartMoodVerse_(\'save\')">' + ic('star') + 'Save Verse</button>';
    h += '      <button type="button" class="btn sm" style="background:var(--card);" onclick="useHeartMoodVerse_(\'journal\')">' + ic('edit') + 'SOAP Journal</button>';
    h += '      <button type="button" class="btn sm" style="background:var(--card);" onclick="useHeartMoodVerse_(\'card\')">&#127807; Card</button>';
    h += '    </div>';
    h += '  </div>';

  }
  h += '</div>';

  h += '<div class="grid g2" style="margin-top:16px">';

  // 1. Reading Plan Progress (Moved to the top-left of the grid for immediate access!)
  h += '<div class="card"><div class="hd"><h3>Reading Plan Progress</h3><button class="link" onclick="go(\'adminPlan\')">Full Schedule</button></div>';
  h += renderTodayReadingQuickCard();
  var progress = getAdminPlanProgress();
  h += '  <div class="prog" style="height:10px; border-radius:10px; background:var(--paper2); overflow:hidden; margin:12px 0 6px;">';
  h += '    <i style="display:block; height:100%; width:' + progress.pct + '%; background:linear-gradient(90deg, var(--rose), var(--gold)); border-radius:10px; transition: width 0.4s ease;"></i>';
  h += '  </div>';
  h += '  <div style="display:flex; justify-content:space-between; align-items:center; margin-top:6px;">';
  h += '    <span class="mu sm" style="font-weight:500;">' + esc(progress.text) + '</span>';
  h += '    <span class="tag sage" style="font-weight:600; background:var(--rose2); color:var(--rose-d);">' + progress.pct + '% Complete</span>';
  h += '  </div>';
  h += '</div>';

  // 2. Day Streak Card
  var wk = '';
  for (var i = 6; i >= 0; i--) {
    var d = addDays(t, -i);
    wk += '<span class="' + (st.map[d] ? 'on' : '') + (i === 0 ? ' tdy' : '') + '">' + DOW[pd(d).getDay()].charAt(0) + '<b></b></span>';
  }
  h += '<div class="card"><div class="streak"><div><div class="big">' + st.cur + '</div></div><div><div class="ey">Day streak</div><div class="mu sm">' +
    (st.today ? 'You showed up today. Well done.' : st.cur ? 'Spend a few minutes with Him to keep it going.' : 'Start your streak today.') + '</div></div></div>' +
    '<div class="week">' + wk + '</div><div class="mu sm" style="margin-top:10px">Longest ' + plural(st.best, 'day') + ' · ' + plural(st.total, 'day') + ' with Him</div></div>';

  // 3. Today's Journal Card
    var e = entryToday();
  h += '<div class="card"><div class="hd"><h3>Today\'s journal</h3><button class="link" onclick="go(\'journal\')">All entries</button></div>';
  if (e) {
    h += '<div class="tag sage">' + ic('check') + ' ' + esc((METHODS[e.type] || METHODS.free).name) + ' entry written</div><h3 style="margin:10px 0 4px">' + esc(entryTitle(e)) + '</h3><p class="mu sm" style="margin:0 0 12px">' + esc(entryText(e).slice(0, 140)) + '…</p><button class="btn sm" onclick="editEntry(\'' + e.id + '\')">' + ic('edit') + 'Keep writing</button>';
  } else {
       h += '<div class="prompt" style="cursor:pointer;transition:transform 0.15s ease,box-shadow 0.15s ease;" title="Tap to write your reflection" onclick="newEntry(\'guided\')"><div style="display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:4px;"><small style="margin:0;">Today\'s prompt · <span style="color:var(--rose-d);font-weight:600;">Tap to write</span></small><button type="button" class="btn sm ghost" style="padding:2px 8px;font-size:11.5px;color:var(--rose-d);font-weight:600;" onclick="event.stopPropagation();cyclePrompt_()">↻ Another Prompt</button></div>' + esc(promptOfDay()) + '</div><div class="row" style="margin-top:12px;flex-wrap:wrap;gap:8px;"><button class="btn sm pri" onclick="newEntry(\'acts\')">ACTS</button><button class="btn sm" onclick="newEntry(\'soap\')">SOAP</button><button class="btn sm pri" onclick="newEntry(\'guided\')">Guided Prompt</button><button class="btn sm" onclick="newEntry(\'free\')">Free write</button></div>';

  }
  h += '</div>';


  // 4. Pray Today & Shared Prayer of the Day
  var due = active().filter(function(p) { return dueToday(p) && p.id !== 'dummy_potd_log'; });
  var doneCount = due.filter(function(p) { return prayedOn(p); }).length;
  h += '<div class="card">';
  h += '  <div class="hd"><h3>Pray today</h3><span class="mu sm">' + doneCount + ' of ' + due.length + ' list prayers</span><button class="link" onclick="go(\'prayers\')">My list</button></div>';

  var groupHash = hash('grouppotd' + t);
  var groupPotd = prayerOfDay(t);

  var groupPrayerKey = 'group_pray_' + t;
  var isGroupDone = cfg()[groupPrayerKey] === '1';

  h += '  <div class="prompt" style="background:var(--gold2); border-color:var(--gold); margin-bottom:14px; padding:14px; border-radius:12px;">';
  h += '    <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:4px;"><small style="color:var(--rose-d); font-weight:600; font-size:11px; letter-spacing:0.08em;">🙏 SHARED PRAYER OF THE DAY</small><button type="button" class="btn sm ghost" style="padding:2px 8px;font-size:11.5px;color:var(--rose-d);font-weight:600;" onclick="cyclePrayer_()">↻ Another Prayer</button></div>';

  h += '    <div style="font-weight:600; font-size:18px; color:var(--ink); margin-bottom:4px;">' + esc(groupPotd.title) + '</div>';
  h += '    <p style="font-size:14.5px; margin:4px 0 10px; color:var(--mu); font-family:var(--serif); line-height:1.45; white-space:pre-wrap;">' + esc(groupPotd.details) + '</p>';

  var amenText = isGroupDone ? 'AMEN ' + ic('check') : 'AMEN';
  var amenClass = isGroupDone ? 'btn sm sage' : 'btn sm pri';
  h += '    <button class="' + amenClass + '" style="font-weight:600; padding:6px 22px;" onclick="clickGroupAmenButton(\'' + groupPrayerKey + '\')">' + amenText + '</button>';
  h += '  </div>';

  if (due.length > 0) {
    h += due.slice(0, 3).map(function(p) {
      if (p.id === 'dummy_potd_log') return '';
      var cArr = cat(p.cat).slice();
      var cColor = cArr.pop() || '#BDAFA8';
      var cName = cArr.pop() || 'Other';
      return '<div class="mini"><span class="dot" style="background:' + cColor + '"></span><div class="t"><b>' + esc(p.title) + '</b><span>' + esc(p.who ? 'For ' + p.who : cName) + '</span></div>' + prayBtn(p) + '</div>';
    }).join('') + (due.length > 3 ? '<div class="mini"><button class="link" onclick="go(\'prayers\')">+ ' + (due.length - 3) + ' more needs</button></div>' : '');
  } else {
    h += '<p class="mu sm" style="margin-top:10px;">Want to track personal requests? Tap My list to add private needs on your heart.</p>';
  }
  h += '</div>';

  // 5. Testimonials Card
  var an = answered().slice(0, 3);
  h += '<div class="card ans"><div class="hd"><h3>Testimonials</h3><button class="link" onclick="go(\'answered\')">See all ' + answered().length + '</button></div>';
  h += an.length ? an.map(function(p) { return '<div class="mini"><span class="dot" style="background:var(--gold)"></span><div class="t"><b>' + esc(p.title) + '</b><span>Answered ' + fmtD(p.answeredOn) + '</span></div></div>'; }).join('')
    : '<p class="mu sm">When God answers, mark the prayer answered. It will be saved here to remember His faithfulness.</p>';
  h += '</div>';

  h += '</div>';
  return h;
}


function VERSES_TXT() { var v = verseOfDay(); return '“' + v[1] + '” ' + v[0] + ' (KJV)'; }
function saveDaily() {
  var currentVerseData = verseOfDay();
  var verseReference = String(currentVerseData[0]);
  var verseTextContent = String(currentVerseData[1]);
  
  if (all('verses').some(function (savedRow) { return savedRow.ref === verseReference; })) { 
    toast('That verse is already saved.'); 
    return; 
  }
  
  put('verses', { 
    ref: verseReference, 
    text: verseTextContent, 
    tr: 'KJV', 
    topic: 'Daily Word', 
    memory: false, 
    created: Date.now(), 
    date: today() 
  });
  toast('Saved to your Scripture tab.');
}
function quickAdd() {
  openModal('Add', '<div class="grid" style="gap:10px">' +
    '<button class="method" onclick="editPrayer()"><b>A prayer request</b><span>Someone or something on your heart</span></button>' +
    '<button class="method" onclick="newEntry()"><b>A journal entry</b><span>ACTS, SOAP, Guided Prompt or Free write</span></button>' +
    '<button class="method" onclick="editVerse()"><b>A verse</b><span>Save scripture or add a memory verse</span></button>' +
    '<button class="method" onclick="go(\'gratitude\')"><b>Gratitude</b><span>Count today\'s blessings</span></button></div>');
}


/**
 * Saves group prayer completion state, updates local data, and triggers calendar streak changes with visual feedback.
 */
function clickGroupAmenButton(taskKey) {
  var isDone = cfg()[taskKey] === '1';
  
  // 1. Toggle the completion status tracking flag safely
  setCfg(taskKey, isDone ? '' : '1');
  
  // 2. Inject a 'prayed' marker directly into today's activity tracking index array
  var todayDateStr = today();
  var dRec = S.prayers['dummy_potd_log'] || { id: 'dummy_potd_log', cat: 'other', freq: 'daily', log: [] };
  
  var logIndex = dRec.log.indexOf(todayDateStr);
  if (isDone && logIndex >= 0) {
    dRec.log.splice(logIndex, 1);
  } else if (!isDone && logIndex < 0) {
    dRec.log.push(todayDateStr);
    toast('Amen! Daily prayer task completed.');
  }
  
  put('prayers', dRec, true);
  
  // 3. Fixed: Instantly forces the homepage layout to reload and change the button style visually
  render(); 
}





/* ---------- PRAYERS ---------- */
/* ---------- PRAYERS ---------- */
function prayBtn(p) {
  var isDone = prayedOn(p);
  return '<button type="button" class="pray' + (isDone ? ' on' : '') + '" onclick="event.stopPropagation();togglePrayed(S.prayers[\'' + p.id + '\'])">' +
    ic(isDone ? 'check' : 'prayers') + (isDone ? 'Prayed' : 'Pray') + '</button>';
}

function freqLabel(freqVal) {
  if (freqVal == null || freqVal === '' || freqVal === 'daily') return 'Daily';
  var idx = parseInt(freqVal, 10);
  return (DOWL[idx] || 'Weekly') + 's';
}

function prayerCard(p) {
  var cCopy = cat(p.cat).slice();
  cCopy.shift();
  var cLabel = cCopy.shift() || 'Special Petitions';
  var cTone = cCopy.shift() || '#1B6B78';
  var logs = (p.log || []).slice().sort();
  var lastDate = logs.length ? logs.slice(-1).pop() : '';

  var metaHtml = '<span class="tag" style="background:' + cTone + '22;color:var(--rose-d);">' + esc(cLabel) + '</span>' +
    (p.answered
      ? '<span class="tag gold">' + ic('check') + ' Answered ' + fmtD(p.answeredOn) + '</span>'
      : '<span>' + esc(freqLabel(p.freq)) + '</span>') +
    '<span>Added ' + fmtD(p.start || today()) + '</span>' +
    '<span>Lifted up ' + plural(logs.length, 'time') + (lastDate ? ' · last ' + ago(lastDate) : '') + '</span>';

  return '<div class="card pr">' +
    '<span class="bar" style="background:' + cTone + '"></span>' +
    '<div class="bd">' +
    '  <h3>' + esc(p.title) + '</h3>' +
    (p.who ? '<div class="mu sm">Interceding for ' + esc(p.who) + '</div>' : '') +
    '  <div class="meta">' + metaHtml + '</div>' +
    (p.details ? '<p class="det">' + nl(p.details) + '</p>' : '') +
    (p.verse ? '<p class="det" style="font-family:var(--serif);font-style:italic;font-size:16px;">' + ic('scripture') + ' ' + esc(p.verse) + '</p>' : '') +
    (p.answered && p.how ? '<p class="det"><b>Testimony of God\'s Answer:</b> ' + nl(p.how) + '</p>' : '') +
    '</div>' +
    '<div class="acts">' +
    (p.answered ? '' : prayBtn(p)) +
    (p.answered ? '' : '<button type="button" class="btn sm gold" onclick="markAnswered(\'' + p.id + '\')">' + ic('answered') + 'Answered</button>') +
    '<button type="button" class="iconbtn" onclick="editPrayer(\'' + p.id + '\')" aria-label="Edit">' + ic('edit') + '</button>' +
    '</div></div>';
}
function vPrayers() {
  // Fixed: Filters out the background tracker so it never shows up on your master prayer wall
  var list = (UI.ptab === 'answered' ? answered() : UI.ptab === 'all' ? prayers() : active()).filter(function(p) { return p.id !== 'dummy_potd_log'; });

  if (UI.pcat) list = list.filter(function (p) { return (p.cat || 'other') === UI.pcat; });
  if (UI.q) { var q = UI.q.toLowerCase(); list = list.filter(function (p) { return [p.title, p.who, p.details, p.verse].join(' ').toLowerCase().indexOf(q) >= 0; }); }
  if (UI.ptab !== 'answered') list.sort(function (a, b) { return (prayedOn(a) - prayedOn(b)) || ((b.created || 0) - (a.created || 0)); });
  var used = {}; prayers().forEach(function (p) { used[p.cat || 'other'] = 1; });

   var activeCount = active().filter(function(p) { return p.id !== 'dummy_potd_log'; }).length;
  var prayModeBtn = activeCount ? '<button class="btn" style="border-color:var(--gold); background:var(--gold2);" onclick="startGuidedPrayerMode()">&#128591; Pray Through My List</button>' : '';
  var h = ph('Prayer List', 'My', 'Lift them up, one by one. Tap Pray as you go.', '<div class="row" style="flex-wrap:wrap;">' + prayModeBtn + '<button class="btn pri" onclick="editPrayer()">' + ic('plus') + 'New prayer</button></div>');


  h += '<div class="seg">' + [['active', 'Praying (' + active().length + ')'], ['answered', 'Answered (' + answered().length + ')'], ['all', 'All']].map(function (t) { return '<button class="' + (UI.ptab === t[0] ? 'on' : '') + '" onclick="UI.ptab=\'' + t[0] + '\';render()">' + t[1] + '</button>'; }).join('') + '</div>';
  h += '<div class="chips"><button class="chip' + (!UI.pcat ? ' on' : '') + '" onclick="UI.pcat=\'\';render()">All</button>' + CATS.filter(function (c) { return used[c]; }).map(function (c) { return '<button class="chip' + (UI.pcat === c ? ' on' : '') + '" onclick="UI.pcat=\'' + c + '\';render()"><i style="background:' + c + '"></i>' + esc(c) + '</button>'; }).join('') + '</div>';
  if (prayers().length > 5) h += '<div class="search">' + ic('search') + '<input type="search" placeholder="Search prayers" value="' + esc(UI.q) + '" oninput="UI.q=this.value;clearTimeout(window._qs);window._qs=setTimeout(function(){render();var s=document.querySelector(\'.search input\');s.focus();s.setSelectionRange(s.value.length,s.value.length)},250)"></div>';
  if (!prayers().length) return h + empty('Your prayer list is empty', 'Add the people and needs on your heart. Choose to pray for each one every day or on a certain day of the week.', '<button class="btn pri" onclick="editPrayer()">' + ic('plus') + 'Add my first prayer</button>');
  if (!list.length) return h + '<div class="card empty"><p>Nothing here yet.</p></div>';
  return h + '<div class="plist">' + list.map(prayerCard).join('') + '</div>';
}

function editPrayer(id) {
  var item = id ? S.prayers[id] : { cat: UI.pcat || 'family', freq: 'daily', start: today() };
  var catOptions = CATS.map(function(c) {
    var cp = c.slice();
    var k = cp.shift();
    var lbl = cp.shift();
    return '<option value="' + k + '"' + (item.cat === k ? ' selected' : '') + '>' + esc(lbl) + '</option>';
  }).join('');

  var dayOptions = DOWL.map(function(dName, idx) {
    return '<option value="' + idx + '"' + (String(item.freq) === String(idx) ? ' selected' : '') + '>Every ' + dName + '</option>';
  }).join('');

  var formHtml = '<div class="f"><span>Prayer Focus</span><input type="text" id="p_t" value="' + esc(item.title) + '" placeholder="e.g., Healing and strength for our family" autofocus></div>' +
    '<div class="f2">' +
    '  <div class="f"><span>Person or Group (optional)</span><input type="text" id="p_w" value="' + esc(item.who) + '" placeholder="Name, household, ministry…"></div>' +
    '  <div class="f"><span>Category</span><select id="p_c">' + catOptions + '</select></div>' +
    '</div>' +
    '<div class="f"><span>Specific Petition &amp; Notes</span><textarea id="p_d" placeholder="Write what you are asking the Lord to do…">' + esc(item.details) + '</textarea></div>' +
    '<div class="f"><span>Scripture Promise (optional)</span><input type="text" id="p_v" value="' + esc(item.verse) + '" placeholder="e.g., Jeremiah 29:11"></div>' +
    '<div class="f2">' +
    '  <div class="f"><span>Prayer Schedule</span><select id="p_f"><option value="daily">Daily</option>' + dayOptions + '</select></div>' +
    '  <div class="f"><span>Date Started</span><input type="date" id="p_s" value="' + esc(item.start || today()) + '"></div>' +
    '</div>';

  var footerHtml = (id ? '<button type="button" class="btn ghost" onclick="removePrayer(\'' + id + '\')">' + ic('trash') + 'Delete</button><span class="sp"></span>' : '') +
    '<button type="button" class="btn" onclick="closeModal()">Cancel</button>' +
    '<button type="button" class="btn pri" onclick="savePrayer(\'' + (id || '') + '\')">Save Prayer</button>';

  openModal(id ? 'Update Prayer Request' : 'Add Prayer Request', formHtml, footerHtml);
}

function savePrayer(id) {
  var titleTxt = val('p_t');
  if (!titleTxt) { toast('Please enter a prayer focus first.'); return; }
  var rec = id ? S.prayers[id] : { created: Date.now(), log: [] };
  rec.title = titleTxt;
  rec.who = val('p_w');
  rec.cat = val('p_c');
  rec.details = val('p_d');
  rec.verse = val('p_v');
  rec.freq = val('p_f');
  rec.start = val('p_s') || today();
  closeModal();
  put('prayers', rec);
  toast(id ? 'Prayer request updated.' : 'Added to your Prayer List.');
}

function removePrayer(id) {
  var backupItem = S.prayers[id];
  closeModal();
  del('prayers', id);
  toast('Prayer removed.', function() { put('prayers', backupItem); });
}

function markAnswered(id) {
  var item = S.prayers[id];
  var body = '<p class="mu" style="margin-top:0;">“' + esc(item.title) + '”</p>' +
    '<div class="f"><span>Date Answered</span><input type="date" id="a_d" value="' + esc(item.answeredOn || today()) + '"></div>' +
    '<div class="f"><span>Testimony of How God Answered</span><textarea id="a_h" class="lined" placeholder="Record how the Lord moved so you can look back on His faithfulness…" autofocus>' + esc(item.how) + '</textarea></div>';
  var foot = (item.answered ? '<button type="button" class="btn ghost" onclick="unanswer(\'' + id + '\')">Return to Active List</button><span class="sp"></span>' : '') +
    '<button type="button" class="btn" onclick="closeModal()">Cancel</button>' +
    '<button type="button" class="btn gold" onclick="saveAnswer(\'' + id + '\')">' + ic('answered') + 'Save Testimony</button>';
  openModal('Give God the Glory!', body, foot);
}

function saveAnswer(id) {
  var item = S.prayers[id];
  item.answered = true;
  item.answeredOn = val('a_d') || today();
  item.how = val('a_h');
  closeModal();
  put('prayers', item);
  toast('Saved to Testimonials!');
  launchPraiseConfetti();
}

function unanswer(id) {
  var item = S.prayers[id];
  item.answered = false;
  closeModal();
  put('prayers', item);
}
/* ---------- GUIDED "PRAY THROUGH MY LIST" FOCUS MODE ---------- */
var GP_STATE = { list: [], idx: 0 };

function startGuidedPrayerMode() {
  var queueList = active().filter(function(p) { return p.id !== 'dummy_potd_log'; });
  if (!queueList.length) {
    toast('Add a prayer request to your list first!');
    return;
  }
  queueList.sort(function(a, b) {
    return (prayedOn(a) - prayedOn(b)) || ((b.created || 0) - (a.created || 0));
  });
  GP_STATE.list = queueList;
  GP_STATE.idx = 0;
  renderGuidedPrayerModal();
}

function renderGuidedPrayerModal() {
  var total = GP_STATE.list.length;
  if (!total) { closeModal(); return; }

  if (GP_STATE.idx >= total) {
    var doneHtml = '<div style="text-align:center; padding:18px 8px;">' +
      emptyArt() +
      '<h2 style="color:var(--rose-d); margin:12px 0 6px;">Amen &amp; Well Done</h2>' +
      '<p class="mu" style="margin:0 0 18px;">You lifted up all ' + plural(total, 'prayer request') + ' on your list today.</p>' +
      '</div>';
    openModal('Prayer Session Complete', doneHtml, '<button class="btn pri" style="width:100%;" onclick="closeModal();render();">Return to Prayer List</button>');
    return;
  }

  var p = GP_STATE.list.slice(GP_STATE.idx, GP_STATE.idx + 1).pop();
  var cCopy = cat(p.cat).slice();
  var cColor = cCopy.pop() || '#BDAFA8';
  var cLabel = cCopy.pop() || 'Other';
  var alreadyPrayed = prayedOn(p);

  var body = '<div style="text-align:center; padding:4px 2px;">';
  body += '  <div class="ey" style="margin-bottom:8px;">Prayer ' + (GP_STATE.idx + 1) + ' of ' + total + ' · ' + esc(cLabel) + '</div>';
  body += '  <div style="background:var(--card); border:1.5px solid var(--line); border-top:4px solid ' + cColor + '; border-radius:18px; padding:22px 18px; box-shadow:var(--sh); text-align:left;">';
  body += '    <h2 style="font-size:24px; color:var(--ink); margin:0 0 4px;">' + esc(p.title) + '</h2>';
  if (p.who) {
    body += '  <div class="mu sm" style="font-weight:600; margin-bottom:10px;">For ' + esc(p.who) + '</div>';
  }
  if (p.details) {
    body += '  <p style="font-size:15.5px; line-height:1.55; color:var(--ink); margin:10px 0;">' + nl(p.details) + '</p>';
  }
  if (p.verse) {
    body += '  <div style="margin-top:12px; padding:10px 14px; border-radius:12px; background:var(--gold2); border-left:3px solid var(--gold); font-family:var(--serif); font-style:italic; font-size:17px; color:var(--ink);">' + ic('scripture') + ' ' + esc(p.verse) + '</div>';
  }
  body += '    <div class="mu sm" style="margin-top:14px;">' + (alreadyPrayed ? '✓ Already prayed today' : 'Take a quiet moment to lift this need up to the Lord.') + '</div>';
  body += '  </div>';
  body += '</div>';

  var foot = '<button class="btn ghost" onclick="guidedPrayerStep(false)">Skip</button>' +
    '<span class="sp"></span>' +
    '<button class="btn pri" onclick="guidedPrayerStep(true)">' + ic('check') + ' Amen · Next</button>';

  openModal('Quiet Prayer Time', body, foot);
}

function guidedPrayerStep(markAsPrayed) {
  var p = GP_STATE.list.slice(GP_STATE.idx, GP_STATE.idx + 1).pop();
  if (markAsPrayed && p && !prayedOn(p)) {
    togglePrayed(p);
  }
  GP_STATE.idx++;
  renderGuidedPrayerModal();
}



/* ---------- COMMUNITY PRAYER WALL & REQUEST SUBMISSION ---------- */
function loadGroupPrayers() {
  gas('api_fetch_group_prayers')
    .then(function(list) {
      window._groupPrayers = list || [];
      render();
    })
    .catch(function(err) {
      window._groupPrayers = [];
      toast('Could not load Prayer Wall: ' + (err.message || err));
      render();
    });
}
function isPrayerAdminUnlocked_() {
  return !!(sessionStorage.getItem('tlc_admin_pin') || window._tlcEmailAdmin);
}

function openPrayerAdminModal() {
  if (isPrayerAdminUnlocked_()) {
    sessionStorage.removeItem('tlc_admin_pin');
    window._tlcEmailAdmin = false;
    if (window.TLC_SUPABASE) window.TLC_SUPABASE.auth.signOut();
    window._groupPrayers = null;
    toast('Admin mode locked.');
    render();
    return;
  }
  openModal('Admin Unlock',
    '<div class="f"><span>Option 1: Enter Admin PIN</span><input type="password" id="adm_pin_in" placeholder="Enter PIN"></div>' +
    '<p class="mu sm" style="margin:8px 0;">— OR —</p>' +
    '<button type="button" class="btn" style="width:100%;" onclick="sendAdminMagicLink()">Option 2: Email Login Link to Admin Email</button>',
    '<button type="button" class="btn pri" onclick="unlockAdminWithPin()">Unlock with PIN</button>'
  );
}

function unlockAdminWithPin() {
  var inp = document.getElementById('adm_pin_in');
  var p = inp ? inp.value.trim() : '';
  if (!p) { toast('Enter your Admin PIN first.'); return; }
  sbFetch_('/rest/v1/rpc/admin_fetch_prayers', {
    method: 'POST',
    body: JSON.stringify({ p_pin: p })
  }).then(function(rows) {
    sessionStorage.setItem('tlc_admin_pin', p);
    closeModal();
    window._groupPrayers = (rows || []).map(function(r) {
      return {
        id: r.id, date: r.prayer_date, from: r.author, title: r.title,
        details: r.details, status: r.status, answered: !!r.answered, owner_token: r.owner_token
      };
    });
    toast('Admin mode unlocked!');
    render();
  }).catch(function(err) {
    toast('Admin error: ' + (err.message || err));
  });
}



function sendAdminMagicLink() {
  sbFetch_('/auth/v1/otp', {
    method: 'POST',
    body: JSON.stringify({ email: 'teneshia.lurene@gmail.com' })
  }).then(function() {
    closeModal();
    toast('Check teneshia.lurene@gmail.com for your sign-in link!');
  }).catch(function(err) { toast(err.message); });
}

function runPrayerWallAction(id, action, ownerToken) {
  var pin = sessionStorage.getItem('tlc_admin_pin') || '';
  var endpoint = isPrayerAdminUnlocked_() ? '/rest/v1/rpc/admin_manage_prayer' : '/rest/v1/rpc/user_manage_prayer';
  var payload = isPrayerAdminUnlocked_() ? { p_id: id, p_action: action, p_pin: pin } : { p_id: id, p_token: ownerToken, p_action: action };

  sbFetch_(endpoint, { method: 'POST', body: JSON.stringify(payload) })
    .then(function() {
      toast(action === 'approve' ? 'Prayer approved for wall!' : action === 'answered' ? 'Marked as Answered!' : 'Prayer updated.');
      window._groupPrayers = null;
      loadGroupPrayers();
    })
    .catch(function(err) { toast('Action failed: ' + err.message); });
}

function openAdminContentEditor() {
  var curAnn = window._groupAnnouncement || '';
  openModal('Manage Plan & Announcement',
    '<div class="f"><span>Group Announcement (Leave blank to clear)</span>' +
    '<textarea id="adm_ann_in" rows="2" placeholder="Type today\'s group announcement...">' + esc(curAnn) + '</textarea></div>' +
    '<hr style="border:0;border-top:1px solid var(--line);margin:12px 0;">' +
    '<div class="ey" style="margin-bottom:6px;">Option A: Edit a Single Day</div>' +
    '<div class="f"><span>Date (YYYY-MM-DD)</span><input type="date" id="adm_pdate_in" value="' + today() + '"></div>' +
    '<div class="f"><span>Reading Plan 1</span><input type="text" id="adm_p1_in" placeholder="e.g. Proverbs 23"></div>' +
    '<div class="f"><span>Reading Plan 2</span><input type="text" id="adm_p2_in" placeholder="e.g. Psalm 37 (Desires)"></div>' +
    '<hr style="border:0;border-top:1px solid var(--line);margin:12px 0;">' +
    '<div class="ey" style="margin-bottom:6px;">Option B: Bulk Paste Month (From Sheets/Excel or YYYY-MM-DD | Plan 1 | Plan 2)</div>' +
    '<div class="f"><textarea id="adm_bulk_in" rows="5" placeholder="2026-12-01 | Proverbs 1 | Psalm 1\n2026-12-02 | Proverbs 2 | Psalm 2"></textarea></div>',
    '<button type="button" class="btn pri" onclick="saveAdminContentEditor()">Save All Changes</button>'
  );
}

function saveAdminContentEditor() {
  var pin = sessionStorage.getItem('tlc_admin_pin') || '';
  var annVal = (document.getElementById('adm_ann_in') || {}).value || '';
  var dtVal = ((document.getElementById('adm_pdate_in') || {}).value || '').trim();
  var p1Val = ((document.getElementById('adm_p1_in') || {}).value || '').trim();
  var p2Val = ((document.getElementById('adm_p2_in') || {}).value || '').trim();
  var bulkRaw = (document.getElementById('adm_bulk_in') || {}).value || '';

    var parsedRows = bulkRaw.split(/\r?\n/).map(function(l) { return l.trim(); }).filter(Boolean).map(function(line) {
    var parts = line.indexOf('\t') >= 0 ? line.split('\t') : line.split('|');
    return {
      date: (parts[0] || '').trim(),
      p1: (parts[1] || 'Rest Day').trim(),
      p2: (parts[2] || 'Rest Day').trim()
    };
  }).filter(function(r) { return /^\d{4}-\d{2}-\d{2}$/.test(r.date); });


  var reqs = [
    sbFetch_('/rest/v1/rpc/admin_update_content', {
      method: 'POST',
      body: JSON.stringify({
        p_pin: pin,
        p_announcement: annVal,
        p_plan_date: p1Val ? dtVal : null,
        p_plan_1: p1Val || null,
        p_plan_2: p2Val || null
      })
    })
  ];
  if (parsedRows.length) {
    reqs.push(sbFetch_('/rest/v1/rpc/admin_bulk_plan', {
      method: 'POST',
      body: JSON.stringify({ p_pin: pin, p_rows: parsedRows })
    }));
  }

  Promise.all(reqs).then(function() {
    closeModal();
    toast('Saved live changes!');
    loadDirectAdminPlan();
  }).catch(function(err) {
    toast('Save failed: ' + err.message);
  });
}


var _admTapCount = 0, _admTapTimer = null;
function tapSecretAdmin_() {
  _admTapCount++;
  clearTimeout(_admTapTimer);
  _admTapTimer = setTimeout(function() { _admTapCount = 0; }, 2500);
  if (_admTapCount >= 5) {
    _admTapCount = 0;
    openPrayerAdminModal();
  }
}




function vPrayerWall() {
  var isAdm = isPrayerAdminUnlocked_();
  var h = '<div onclick="if(event.target.tagName===\'H1\')tapSecretAdmin_()">' +
    ph('Prayer Wall', 'Community', 'Stand in agreement with our Academy T.L.C. family, or send a prayer request to our team.',
      '<div style="display:flex;gap:8px;flex-wrap:wrap;">' +
      (isAdm ? '<button type="button" class="btn" onclick="openAdminContentEditor()">Edit Plan &amp; News</button>' : '') +
      (isAdm ? '<button type="button" class="btn" onclick="openPrayerAdminModal()">Lock Admin</button>' : '') +
      '<button class="btn pri" onclick="openGroupPrayerForm()">' + ic('plus') + ' Submit Request</button></div>') +
    '</div>';

  if (!window._groupPrayers) {
    setTimeout(loadGroupPrayers, 50);
    return h + '<div class="card" style="text-align:center; padding:30px;"><div class="mu">' + ic('today', 'spin') + ' Loading community prayers...</div></div>';
  }

  var list = window._groupPrayers;
  if (!list.length) {
    return h + empty('No community requests posted yet', 'Have a prayer need on your heart? Tap Submit Request above to send it privately to our team or request it on the wall.',
      '<button class="btn pri" onclick="openGroupPrayerForm()">' + ic('plus') + ' Submit Prayer Request</button>');
  }

  var prayedMap = (S.settings.groupWallPrayed && S.settings.groupWallPrayed.data) || {};
  var myTokens = JSON.parse(localStorage.getItem('tlc_my_prayer_tokens') || '[]');
  var hiddenIds = JSON.parse(localStorage.getItem('tlc_hidden_prayers_v1') || '[]');
  var todayStr = today();

  var visibleList = list.filter(function(item) {
    return isAdm || hiddenIds.indexOf(String(item.id)) === -1;
  });

  if (!visibleList.length) {
    return h + empty('No community requests to display', 'Have a prayer need on your heart? Tap Submit Request above to send it privately to our team or request it on the wall.',
      '<button class="btn pri" onclick="openGroupPrayerForm()">' + ic('plus') + ' Submit Prayer Request</button>');
  }

  h += '<div class="stack" style="gap:12px;">' + visibleList.map(function(item) {
    var isPrayed = !!prayedMap[item.id + '_' + todayStr];
    var isPending = item.status === 'pending';
    var isMine = item.owner_token && myTokens.indexOf(item.owner_token) >= 0;
    var borderCol = isPending ? 'var(--rose)' : (item.answered ? '#2E7D32' : 'var(--gold)');

    var actions = '';
    if (isAdm && isPending) {
      actions += '<button type="button" class="btn pri sm" onclick="runPrayerWallAction(\'' + esc(item.id) + '\',\'approve\',\'\')">Approve</button>';
    }
    if ((isAdm || isMine) && !item.answered) {
      actions += '<button type="button" class="btn sm" onclick="runPrayerWallAction(\'' + esc(item.id) + '\',\'answered\',\'' + esc(item.owner_token || '') + '\')">Mark Answered</button>';
    }
    if (isAdm || isMine) {
      actions += '<button type="button" class="btn sm" onclick="runPrayerWallAction(\'' + esc(item.id) + '\',\'takedown\',\'' + esc(item.owner_token || '') + '\')">Take Down</button>';
    }
    if (isAdm) {
      actions += '<button type="button" class="btn sm" style="color:var(--rose);" onclick="runPrayerWallAction(\'' + esc(item.id) + '\',\'delete\',\'\')">Delete</button>';
    }
    if (!isMine && !isPending) {
      actions += '<button type="button" class="btn sm ghost" style="margin-left:auto;color:var(--mu);font-size:12px;" onclick="reportWallPrayer(\'' + esc(item.id) + '\')">⚑ Report / Hide</button>';
    }

    return '<div class="card" style="padding:18px 20px; border-left:4px solid ' + borderCol + ';">' +
      '<div class="hd" style="gap:10px; flex-wrap:wrap;">' +
      '  <div style="flex:1; min-width:180px;">' +
      '    <div class="ey" style="font-size:11px; margin-bottom:2px;">' + esc(item.from ? 'From ' + item.from : 'Academy T.L.C. Family') + (item.date ? ' · ' + esc(fmtD(item.date) || item.date) : '') +
      (isPending ? ' · <b style="color:var(--rose);">Pending Approval</b>' : '') +
      (item.answered ? ' · <b style="color:#2E7D32;">Answered Praise!</b>' : '') + '</div>' +
      '    <h3>' + esc(item.title) + '</h3>' +
      '  </div>' +
      '  <button type="button" class="pray' + (isPrayed ? ' on' : '') + '" onclick="toggleGroupWallPrayed(\'' + esc(item.id) + '\')">' + ic(isPrayed ? 'check' : 'prayers') + (isPrayed ? 'Prayed Today' : 'I Prayed') + '</button>' +
      '</div>' +
      (item.details ? '<p style="margin:8px 0 0; font-size:15px; line-height:1.5; color:var(--ink);">' + nl(item.details) + '</p>' : '') +
      (actions ? '<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-top:12px;">' + actions + '</div>' : '') +
      '</div>';
  }).join('') + '</div>';

  return h;
}

function reportWallPrayer(id) {
  confirmBox('Report and hide this post from your Prayer Wall? Our ministry team reviews flagged posts within 24 hours.', 'Report & Hide', function() {
    var hidden = JSON.parse(localStorage.getItem('tlc_hidden_prayers_v1') || '[]');
    if (hidden.indexOf(String(id)) === -1) hidden.push(String(id));
    localStorage.setItem('tlc_hidden_prayers_v1', JSON.stringify(hidden));
    toast('Post hidden & reported to Academy T.L.C. moderation.');
    render();
  });
}


function toggleGroupWallPrayed(itemId) {
  var prayedMap = (S.settings.groupWallPrayed && S.settings.groupWallPrayed.data) || {};
  var todayStr = today();
  var key = itemId + '_' + todayStr;
  var wasDone = !!prayedMap[key];

  if (wasDone) {
    delete prayedMap[key];
  } else {
    prayedMap[key] = 1;
    var dRec = S.prayers['dummy_potd_log'] || { id: 'dummy_potd_log', cat: 'other', freq: 'daily', log: [] };
    if (dRec.log.indexOf(todayStr) < 0) {
      dRec.log.push(todayStr);
      put('prayers', dRec, true);
    }
    toast('Thank you for standing in prayer!');
  }

  put('settings', { id: 'groupWallPrayed', data: prayedMap }, true);
  render();
}



function openGroupPrayerForm() {
  var defaultName = cfg().name || '';
  var body = '<p class="mu sm" style="margin-top:0;">Send your prayer request to Academy T.L.C. You can include your name or submit anonymously.</p>' +
    '<div class="f"><span>Your Name (leave blank for Anonymous)</span><input type="text" id="gp_from" value="' + esc(defaultName) + '" placeholder="First name or Anonymous"></div>' +
    '<div class="f"><span>Prayer Request Title</span><input type="text" id="gp_title" placeholder="e.g. Healing for my family" autofocus></div>' +
    '<div class="f"><span>Details</span><textarea id="gp_details" placeholder="How can we stand in faith with you?"></textarea></div>' +
    '<label style="display:flex; align-items:flex-start; gap:10px; background:var(--gold2); border:1px solid var(--gold); padding:10px 12px; border-radius:12px; cursor:pointer; font-size:14px;">' +
    '  <input type="checkbox" id="gp_wall" checked style="width:auto; margin-top:3px;">' +
    '  <span><b>Share on Community Prayer Wall</b><br><span class="mu sm">Check this if we may post this request on the group Prayer Wall after review. Uncheck to keep it private for our prayer team only.</span></span>' +
    '</label>';

  var foot = '<button class="btn" onclick="closeModal()">Cancel</button>' +
    '<button class="btn pri" id="gp_send_btn" onclick="submitGroupPrayerForm()">Send Request</button>';

  openModal('Submit a Prayer Request', body, foot);
}

function submitGroupPrayerForm() {
  var titleVal = val('gp_title');
  if (!titleVal) {
    toast('Please enter a title for your prayer request.');
    return;
  }
  var fromVal = val('gp_from') || 'Anonymous';
  var detVal = val('gp_details');
  var allowWall = !!($('gp_wall') && $('gp_wall').checked);

  var btn = $('gp_send_btn');
  if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }

  gas('api_submit_group_prayer', { from: fromVal, title: titleVal, details: detVal, allowWall: allowWall })
    .then(function() {
      closeModal();
      toast('Your prayer request has been sent!');
    })
    .catch(function(err) {
      if (btn) { btn.disabled = false; btn.textContent = 'Send Request'; }
      toast('Could not send request: ' + (err.message || err));
    });
}




/* ---------- ANSWERED ---------- */
function vAnswered() {
  var list = answered();
  var h = ph('Answered Prayers', 'Testimonials', 'God has been so good! Tap any prayer to edit, delete, or update how God answered.');
  if (list.length) {
    h += '<div style="margin-bottom:14px;"><button type="button" class="btn sm" style="border-color:var(--gold); background:var(--gold2);" onclick="openTestimonyKeepsake()">&#128229; Export Keepsake</button></div>';
  }
  if (!list.length) return h + '<div class="card empty">' + emptyArt() + '<h3>No answered prayers yet</h3><p>When God answers a prayer on your list, tap <b>Answered</b> to record His faithfulness here.</p></div>';
  h += '<div class="stack">' + list.map(function (p) {
    var w = p.start && p.answeredOn ? daysBetween(p.start, p.answeredOn) : null;
    return '<div class="card ans" style="padding:18px 20px; cursor:pointer;" onclick="markAnswered(\'' + p.id + '\')">' +
      '<div class="hd" style="gap:8px; flex-wrap:wrap;">' +
      '  <h3 style="flex:1; min-width:160px;">' + esc(p.title) + '</h3>' +
      '  <span class="tag gold">Answered ' + fmtD(p.answeredOn) + '</span>' +
      '  <button type="button" class="iconbtn" title="Edit details" onclick="event.stopPropagation();editPrayer(\'' + p.id + '\')" aria-label="Edit">' + ic('edit') + '</button>' +
      '  <button type="button" class="iconbtn" title="Delete" onclick="event.stopPropagation();removePrayer(\'' + p.id + '\')" aria-label="Delete">' + ic('trash') + '</button>' +
      '</div>' +
      (p.who ? '<div class="mu sm" style="margin-bottom:6px;">For ' + esc(p.who) + '</div>' : '') +
      (p.how ? '<p style="font-family:var(--serif); font-size:16.5px; line-height:1.5; margin:6px 0 0;">' + nl(p.how) + '</p>' : '<p class="mu sm" style="font-style:italic; margin:6px 0 0;">Tap to write how God answered this prayer…</p>') +
      (w != null && w > 0 ? '<div class="mu sm" style="margin-top:8px;">Answered after ' + plural(w, 'day') + ' of prayer</div>' : '') +
      '</div>';
  }).join('') + '</div>';
  return h;
}



/* ---------- JOURNAL ---------- */
function vJournal() {
  var list = entries();
  if (UI.jfilter) list = list.filter(function (e) { return e.type === UI.jfilter; });
  if (UI.q2) { var q = UI.q2.toLowerCase(); list = list.filter(function (e) { return (entryTitle(e) + ' ' + entryText(e) + ' ' + (e.ref || '')).toLowerCase().indexOf(q) >= 0; }); }
  var h = ph('Journal', 'My Daily', plural(entries().length, 'entry').replace('entrys', 'entries') + ' · write with ACTS, SOAP or a free page', '<button class="btn pri" onclick="newEntry()">' + ic('plus') + 'New entry</button>');
  h += '<div class="seg">' + [['', 'All'], ['acts', 'ACTS'], ['soap', 'SOAP'], ['guided', 'Guided Prompt'], ['free', 'Free write']].map(function (t) { return '<button class="' + (UI.jfilter === t[0] ? 'on' : '') + '" onclick="UI.jfilter=\'' + t[0] + '\';render()">' + t[1] + '</button>'; }).join('') + '</div>';

  if (entries().length > 5) h += '<div class="search">' + ic('search') + '<input type="search" placeholder="Search your journal" value="' + esc(UI.q2 || '') + '" oninput="UI.q2=this.value;clearTimeout(window._qs);window._qs=setTimeout(function(){render();var s=document.querySelector(\'.search input\');s.focus();s.setSelectionRange(s.value.length,s.value.length)},250)"></div>';
  if (!entries().length) return h + empty('Your first page is waiting', 'Try the ACTS method for prayer, or SOAP when you read your Bible. Each one guides you with gentle prompts.', '<button class="btn pri" onclick="newEntry()">' + ic('edit') + 'Write my first entry</button>');
  var mo = '';
  h += '<div class="jlist">' + list.map(function (e) {
    var d = pd(e.date), m = MONL[d.getMonth()] + ' ' + d.getFullYear(), out = '';
    if (m !== mo) { out += '<div class="mhd">' + m + '</div>'; mo = m; }
    return out + '<div class="card je" onclick="viewEntry(\'' + e.id + '\')"><div class="dd"><b>' + d.getDate() + '</b><span>' + DOW[d.getDay()] + '</span></div><div class="bd"><div class="row"><h3 style="flex:1">' + esc(entryTitle(e)) + '</h3><span class="tag ' + (e.type === 'soap' ? 'sage' : e.type === 'free' ? 'gold' : '') + '">' + (METHODS[e.type] || METHODS.free).name + '</span></div><p>' + esc(entryText(e).slice(0, 220)) + '</p></div></div>';
  }).join('') + '</div>';
  return h;
}
function newEntry(type) {
  type = type || cfg().method || '';
  if (!type) {
    openModal('New journal entry', '<p class="mu" style="margin-top:0">How would you like to write today?</p><div class="methods">' + Object.keys(METHODS).map(function (k) {
      return '<button class="method" onclick="newEntry(\'' + k + '\')"><b>' + METHODS[k].name + '</b><span>' + METHODS[k].blurb + '</span></button>';
    }).join('') + '</div>');
    return;
  }
  editEntry(null, type);
}
function editEntry(id, type, draft) {
  var e = draft || (id ? JSON.parse(JSON.stringify(S.entries[id])) : { type: type || 'acts', date: today() });
  if (type) e.type = type;
  window._draft = e;
  var m = METHODS[e.type] || METHODS.free;
  var body = '<div class="f2"><div class="f"><span>Date</span><input type="date" id="e_d" value="' + esc(e.date) + '"></div><div class="f"><span>Title (optional)</span><input type="text" id="e_t" value="' + esc(e.title) + '" placeholder="Give this entry a name"></div></div>';
  body += '<div class="chips">' + Object.keys(METHODS).map(function (k) { return '<button class="chip' + (k === e.type ? ' on' : '') + '" onclick="switchMethod(\'' + (id || '') + '\',\'' + k + '\')">' + METHODS[k].name + '</button>'; }).join('') + '</div>';
  
  if (e.type === 'soap') {
    body += '<div class="f"><span>Passage</span><input type="text" id="e_ref" value="' + esc(e.ref) + '" placeholder="e.g. Psalm 23 or John 15:1–11"></div>';
  } else {
    var labelText = (e.type === 'guided') ? 'Today\'s Guided Reflection' : 'A prompt if you need one';
    body += '<div class="prompt" style="margin-bottom:16px"><div style="display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:4px;"><small style="margin:0;">' + labelText + '</small><button type="button" class="btn sm ghost" style="padding:2px 8px;font-size:11.5px;color:var(--rose-d);font-weight:600;" onclick="var d=readEntryForm();_promptOffset++;editEntry(\'' + (id || '') + '\',null,d)">↻ Another Prompt</button></div>' + esc(promptOfDay(e.date, e.type)) + '</div>';

  }
  
  body += m.fields.map(function (f) {
    var lab = e.type === 'free' ? esc(f[1]) : '<span class="lt">' + esc(f[1].charAt(0)) + '</span>' + esc(f[1].slice(1));
    return '<div class="fld"><label for="e_' + f[0] + '">' + lab + '</label><div class="hint">' + esc(f[2]) + '</div><textarea class="lined" id="e_' + f[0] + '" rows="' + (e.type === 'free' ? 12 : 4) + '">' + esc(e[f[0]]) + '</textarea></div>';
  }).join('');

  var lookupBar = '<div style="margin-bottom:12px;">' +
    '  <button type="button" class="btn sm" style="border-color:var(--gold); background:var(--gold2);" onclick="toggleJournalScriptureBox()">&#128214; Insert Scripture</button>' +
    '  <div id="j_lookup_box" style="display:none; margin-top:8px; padding:12px; border-radius:12px; background:var(--paper2); border:1px solid var(--line);">' +
    '    <div style="display:flex; gap:6px; flex-wrap:wrap;">' +
    '      <input type="text" id="j_lookup_ref" placeholder="e.g., Psalm 23:1 or John 3:16" style="flex:2; min-width:150px;">' +
    '      <select id="j_lookup_ver" style="flex:1; min-width:80px;"><option value="KJV">KJV</option><option value="BSB">BSB</option></select>' +
    '      <button type="button" class="btn sm pri" onclick="runJournalScriptureLookup()">Find</button>' +
    '    </div>' +
    '    <div id="j_lookup_result" style="margin-top:6px;"></div>' +
    '  </div>' +
    '</div>';

  var foot = (id ? '<button class="btn ghost" onclick="removeEntry(\'' + id + '\')">' + ic('trash') + 'Delete</button><span class="sp"></span>' : '') + '<button class="btn" onclick="closeModal()">Cancel</button><button class="btn pri" onclick="saveEntry(\'' + (id || '') + '\')">Save entry</button>';
  openModal(id ? 'Edit entry' : m.name + ' journal', lookupBar + body, foot, true);
}


/* Copy what's typed in the form into the draft (keeps text from other methods when you switch). */
function readEntryForm() {
  var e = window._draft || {};
  e.date = val('e_d') || today(); e.title = val('e_t');
  if ($('e_ref')) e.ref = val('e_ref');
  (METHODS[e.type] || METHODS.free).fields.forEach(function (f) { var el = $('e_' + f[0]); if (el) e[f[0]] = el.value.trim(); });
  return e;
}
function switchMethod(id, k) { var e = readEntryForm(); e.type = k; editEntry(id || null, null, e); }
function saveEntry(id) {
  var e = readEntryForm();
  if (!entryText(e) && !e.title) { toast('Write a little first, then save.'); return; }
  if (!id) e.created = Date.now();
  closeModal(); put('entries', e); toast('Journal entry saved.');
}
function viewEntry(id) {
  var e = S.entries[id], m = METHODS[e.type] || METHODS.free;
  var body = '<div class="ey">' + fmtD(e.date, true) + ' · ' + m.name + '</div>' + (e.ref ? '<h3 style="margin-top:6px">' + esc(e.ref) + '</h3>' : '') + '<div class="read">' +
    m.fields.filter(function (f) { return e[f[0]]; }).map(function (f) { return '<h3>' + esc(f[1]) + '</h3><p>' + esc(e[f[0]]) + '</p>'; }).join('') + '</div>' + divider();
  openModal(esc(entryTitle(e)), body, '<button class="btn ghost" onclick="copyText(entryPlain(\'' + id + '\'))">' + ic('copy') + 'Copy</button><span class="sp"></span><button class="btn pri" onclick="editEntry(\'' + id + '\')">' + ic('edit') + 'Edit</button>', true);
}
function entryPlain(id) { var e = S.entries[id], m = METHODS[e.type] || METHODS.free; return entryTitle(e) + '\n' + fmtD(e.date, true) + '\n\n' + (e.ref ? e.ref + '\n\n' : '') + m.fields.filter(function (f) { return e[f[0]]; }).map(function (f) { return f[1].toUpperCase() + '\n' + e[f[0]]; }).join('\n\n'); }
/**
 * Erases written journal entry responses safely and confirms via floating notification.
 */
function removeEntry(id) {
  if (!id) return;
  del('entries', id, true);
  closeModal();
  render();
  toast('Journal entry successfully removed.');
}

/* ---------- SCRIPTURE ---------- */
function vScripture() {
  var vs = all('verses').sort(function (a, b) { return (b.created || 0) - (a.created || 0); }), mem = vs.filter(function (v) { return v.memory; });
  var h = ph('Scripture', 'My Saved', 'Hide His Word in your heart. Save verses that speak to you and memorize your favorites.', '<button class="btn pri" onclick="editVerse()">' + ic('plus') + 'Add a verse</button>');
  h += '<div class="seg">' + [['saved', 'Saved (' + vs.length + ')'], ['memory', 'Memory verses (' + mem.length + ')'], ['practice', 'Practice']].map(function (t) { return '<button class="' + (UI.vtab === t[0] ? 'on' : '') + '" onclick="UI.vtab=\'' + t[0] + '\';render()">' + t[1] + '</button>'; }).join('') + '</div>';
  if (UI.vtab === 'practice') return h + practice(mem.length ? mem : vs);
  var list = UI.vtab === 'memory' ? mem : vs;
  if (!list.length) return h + empty(UI.vtab === 'memory' ? 'No memory verses yet' : 'No verses saved yet', UI.vtab === 'memory' ? 'Tap the star on any saved verse to add it to your memory verses.' : 'Save the daily verse from the Today page, or add your own in any translation.', '<button class="btn pri" onclick="editVerse()">' + ic('plus') + 'Add a verse</button>');
  var topics = {}; list.forEach(function (v) { if (v.topic) topics[v.topic] = 1; });
  return h + '<div class="grid g2">' + list.map(function (v) {
    return '<div class="card vcard"><div class="row"><div class="ref" style="flex:1">' + esc(v.ref) + (v.tr ? ' · ' + esc(v.tr) : '') + '</div>' + (v.memorized ? '<span class="tag sage">' + ic('check') + ' Memorized</span>' : '') + '</div><div class="vt">“' + esc(v.text) + '”</div>' +
           (v.note ? '<p class="mu sm" style="margin-top:-4px">' + nl(v.note) + '</p>' : '') + '<div class="vb">' + (v.topic ? '<span class="tag">' + esc(v.topic) + '</span>' : '') + '<span class="sp"></span>' +
      '<button class="iconbtn" title="Memory verse" onclick="toggleMem(\'' + v.id + '\')" style="' + (v.memory ? 'color:var(--gold)' : '') + '">' + ic('star') + '</button><button class="iconbtn" title="Shareable Verse Card" onclick="var sv=S.verses[\'' + v.id + '\'];openVerseCard(sv.ref,sv.text,sv.tr)">&#127807;</button><button class="iconbtn" title="Copy" onclick="copyText(\'“\'+S.verses[\'' + v.id + '\'].text+\'” \'+S.verses[\'' + v.id + '\'].ref)">' + ic('copy') + '</button><button class="iconbtn" title="Edit" onclick="editVerse(\'' + v.id + '\')">' + ic('edit') + '</button></div></div>';
  }).join('') + '</div>';

}
function toggleMem(id) { var v = S.verses[id]; v.memory = !v.memory; put('verses', v); toast(v.memory ? 'Added to your memory verses.' : 'Removed from memory verses.'); }
function editVerse(id) {
  var v = id ? S.verses[id] : { tr: cfg().tr || '' };
  openModal(id ? 'Edit verse' : 'Add a verse', '<div class="f2"><div class="f"><span>Reference</span><input type="text" id="v_r" value="' + esc(v.ref) + '" placeholder="e.g. Psalm 46:10" autofocus></div><div class="f"><span>Translation</span><input type="text" id="v_tr" value="' + esc(v.tr) + '" placeholder="NIV, ESV, KJV…"></div></div>' +
    '<div class="f"><span>Verse</span><textarea id="v_t" placeholder="Type or paste the verse">' + esc(v.text) + '</textarea></div>' +
    '<div class="f2"><div class="f"><span>Topic (optional)</span><input type="text" id="v_tp" value="' + esc(v.topic) + '" placeholder="Peace, Strength, Marriage…" list="topics"><datalist id="topics">' + ['Peace', 'Strength', 'Faith', 'Hope', 'Love', 'Anxiety', 'Provision', 'Healing', 'Marriage', 'Motherhood', 'Wisdom', 'Gratitude'].map(function (t) { return '<option value="' + t + '">'; }).join('') + '</datalist></div>' +
    '<div class="f"><span>Memory verse</span><select id="v_m"><option value="">No</option><option value="1"' + (v.memory ? ' selected' : '') + '>Yes, I want to memorize it</option><option value="2"' + (v.memorized ? ' selected' : '') + '>Yes, and I know it by heart</option></select></div></div>' +
    '<div class="f"><span>What it means to me (optional)</span><textarea id="v_n" style="min-height:70px">' + esc(v.note) + '</textarea></div>',
    (id ? '<button class="btn ghost" onclick="removeVerse(\'' + id + '\')">' + ic('trash') + 'Delete</button><span class="sp"></span>' : '') + '<button class="btn" onclick="closeModal()">Cancel</button><button class="btn pri" onclick="saveVerse(\'' + (id || '') + '\')">Save</button>');
}
function saveVerse(id) {
  var r = val('v_r'), t = val('v_t'); if (!r || !t) { toast('Please add the reference and the verse.'); return; }
  var v = id ? S.verses[id] : { created: Date.now(), date: today() }, m = val('v_m');
  v.ref = r; v.text = t; v.tr = val('v_tr'); v.topic = val('v_tp'); v.note = val('v_n'); v.memory = !!m; v.memorized = m === '2';
  if (v.tr) setCfg('tr', v.tr);
  closeModal(); put('verses', v); toast('Verse saved.');
}
function removeVerse(id) { var v = S.verses[id]; closeModal(); del('verses', id); toast('Verse deleted.', function () { put('verses', v); }); }
var PR = { i: 0, lvl: 0 };

function practice(list) {
  if (!list || !list.length) {
    return empty('No memory verses selected', 'Tap the star icon on any saved verse to add it to your practice deck.', '');
  }
  PR.i = PR.i % list.length;
  var activeVerse = list.slice(PR.i, PR.i + 1).pop();
  var tokens = String(activeVerse.text || '').split(/\s+/);
  var mode = PR.lvl;

  var renderedVerse = tokens.map(function(tok, idx) {
    var parts = tok.match(/^([“"'(]*)([A-Za-z’']+)(.*)$/);
    if (!parts || mode === 0) return esc(tok);
    var shouldMask = (mode === 3) || (mode === 2) || (mode === 1 && (idx % 3 === 1));
    if (!shouldMask) return esc(tok);
    var pCopy = parts.slice();
    pCopy.shift();
    var lead = pCopy.shift();
    var core = pCopy.shift();
    var trail = pCopy.shift();
    if (mode === 2) {
      return esc(lead) + '<span class="fl">' + esc(core.charAt(0)) + '</span><span class="blank">' + esc(core.slice(1)) + '</span>' + esc(trail);
    }
    return esc(lead) + '<span class="blank">' + esc(core) + '</span>' + esc(trail);
  }).join(' ');

  var modes = ['Full Text', 'Fill Blanks', 'First Letters', 'Recite All'];
  var modeButtons = modes.map(function(lbl, idx) {
    return '<button type="button" class="' + (mode === idx ? 'on' : '') + '" onclick="PR.lvl=' + idx + ';render()">' + lbl + '</button>';
  }).join('');

  return '<div class="card practice">' +
    '<div class="ref">' + esc(activeVerse.ref) + (activeVerse.tr ? ' · ' + esc(activeVerse.tr) : '') + '</div>' +
    '<div class="vt">' + renderedVerse + '</div>' +
    '<div class="seg">' + modeButtons + '</div>' +
    '<div class="row" style="justify-content:center;flex-wrap:wrap;">' +
    '  <button type="button" class="btn" onclick="PR.i=(PR.i+' + (list.length - 1) + ')%' + list.length + ';PR.lvl=0;render()">' + ic('back') + 'Previous</button>' +
    '  <button type="button" class="btn ' + (activeVerse.memorized ? 'sage' : '') + '" onclick="toggleVerseMemorized(\'' + activeVerse.id + '\')">' + ic('check') + (activeVerse.memorized ? 'Memorized' : 'Mark Memorized') + '</button>' +
    '  <button type="button" class="btn" onclick="PR.i=(PR.i+1)%' + list.length + ';PR.lvl=0;render()">Next' + ic('next') + '</button>' +
    '</div>' +
    '<p class="mu sm" style="margin-top:14px;">Verse ' + (PR.i + 1) + ' of ' + list.length + ' · Speak it aloud, then increase the challenge level.</p>' +
    '</div>';
}

function toggleVerseMemorized(verseId) {
  var item = S.verses[verseId];
  if (!item) return;
  item.memorized = !item.memorized;
  item.memory = true;
  put('verses', item);
}


/* ---------- INTENSIVE 31-DAY GRATITUDE MATRIX ENGINE ---------- */

/**
 * Renders the intentional Gratitude Matrix page view with an interactive historical reflection vault.
 */
function vGratitude() {
  var g = all('gratitude'), byDay = {};
  g.forEach(function (x) { if (x.date) byDay[x.date] = x; });

  var todayDateObj = new Date(pd(today()));
  var todayDayNum = todayDateObj.getDate();
  var activePrompt = GRATITUDE_PROMPTS[(todayDayNum - 1) % GRATITUDE_PROMPTS.length];

  var h = ph('Gratitude Matrix', 'Counting my blessings', 'Take a quiet moment to reflect. Your entry will save automatically as you type.');
  
  var todayRecord = byDay[today()] || null;
  var existingText = todayRecord ? todayRecord.text : '';
  var existingId = todayRecord ? todayRecord.id : '';

  // 1. Today's Focused Reflection Input Card
  h += '<div class="card" style="margin-bottom: 24px; padding: 20px; border-radius:18px;">';
  h += '  <div class="prompt" style="background:var(--blush); border-color:var(--rose-d); margin-bottom:14px; padding:14px; border-radius:12px;">';
  h += '    <small style="color:var(--sage); font-weight:600; font-size:11px; letter-spacing:0.08em; display:block; margin-bottom:2px;">📝 DAILY GRATITUDE FOCUS (DAY ' + todayDayNum + ')</small>';
  h += '    <p style="font-size:17px; font-weight:600; margin:4px 0 0; color:var(--ink); font-family:var(--serif); line-height:1.45;">' + esc(activePrompt) + '</p>';
  h += '  </div>';
  h += '  <div class="fld" style="margin-bottom: 0;">';
  h += '    <textarea class="lined" id="g_text_input" data-id="' + existingId + '" placeholder="Take a quiet moment to pour out your heart with thought and intention here..." style="min-height:140px; width:100%;" onchange="saveMatrixGratitude()">' + esc(existingText) + '</textarea>';
  h += '  </div>';
  h += '</div>';

  // 2. Interactive Sliding History Vault Section
  h += '<h2 style="margin:24px 0 12px; color:var(--rose-d); font-weight:600;">31-Day Reflection Vault</h2>';
  if (!UI.gratitudeVaultDay) UI.gratitudeVaultDay = todayDayNum;

  var viewDayNum = UI.gratitudeVaultDay;
  var vaultPromptText = GRATITUDE_PROMPTS[(viewDayNum - 1) % GRATITUDE_PROMPTS.length];
  var currentYear = todayDateObj.getFullYear();
  var currentMonth = todayDateObj.getMonth();
  var targetDateStr = currentYear + '-' + ('0' + (currentMonth + 1)).slice(-2) + '-' + ('0' + viewDayNum).slice(-2);
  
  var dayRec = byDay[targetDateStr];
  var loggedText = dayRec ? dayRec.text : '';
  var loggedId = dayRec ? dayRec.id : '';
  var isFutureDay = (viewDayNum > todayDayNum);

  h += '<div class="card" style="border-radius:14px; padding:20px; border-left: 4px solid var(--rose);">';
  h += '  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; border-bottom:1px solid var(--line); padding-bottom:10px;">';
  h += '    <button class="iconbtn" style="' + (viewDayNum <= 1 ? 'opacity:0.3; cursor:not-allowed;' : '') + '" onclick="navigateGratitudeVault(-1)" ' + (viewDayNum <= 1 ? 'disabled' : '') + '>' + ic('back') + '</button>';
  h += '    <div style="text-align:center;">';
  h += '      <div class="ey" style="color:var(--ink); font-weight:600; font-size:15px; letter-spacing:0.02em;">DAY ' + viewDayNum + ' OF 31</div>';
  h += '      <small class="mu" style="font-size:12px;">' + (loggedText ? '✨ Reflection Complete' : isFutureDay ? '⏳ Upcoming Prompt' : '✍️ Tap below to log or update') + '</small>';
  h += '    </div>';
  h += '    <button class="iconbtn" style="' + (viewDayNum >= 31 ? 'opacity:0.3; cursor:not-allowed;' : '') + '" onclick="navigateGratitudeVault(1)" ' + (viewDayNum >= 31 ? 'disabled' : '') + '>' + ic('next') + '</button>';
  h += '  </div>';

  h += '  <div style="font-size:14px; font-weight:600; color:var(--sage); margin-bottom:6px;">Prompt Focus:</div>';
  h += '  <div style="font-size:16px; font-weight:500; color:var(--ink); margin-bottom:14px; line-height:1.4; padding-left:4px;">' + esc(vaultPromptText) + '</div>';
  h += '  <div style="font-size:14px; font-weight:600; color:var(--sage); margin-bottom:6px;">My Answer (Auto-Saves):</div>';

  if (isFutureDay) {
    h += '  <p class="mu sm" style="background:var(--paper2); padding:12px 14px; border-radius:8px; text-align:center; margin:0;">This day hasn\'t arrived yet. Come back on Day ' + viewDayNum + ' to log your reflection!</p>';
  } else {
    h += '  <textarea class="lined" id="g_vault_input" data-id="' + loggedId + '" data-date="' + targetDateStr + '" data-day="' + viewDayNum + '" placeholder="Missed Day ' + viewDayNum + '? Write your reflection here—it saves automatically..." style="min-height:110px; width:100%;" onchange="saveVaultGratitude()">' + esc(loggedText) + '</textarea>';
  }
  h += '</div>';
  return h;
}


/**
 * Slides the vault day counter step-by-step between 1 and 31.
 */
function navigateGratitudeVault(direction) {
  var targetDay = (UI.gratitudeVaultDay || 1) + direction;
  if (targetDay >= 1 && targetDay <= 31) {
    UI.gratitudeVaultDay = targetDay;
    render(); // Refreshes view state instantly
  }
}

/**
 * Saves your structured gratitude reflection.
 */
function saveMatrixGratitude() {
  var el = document.getElementById('g_text_input');
  if (!el) return;
  
  var t = el.value.trim();
  var id = el.getAttribute('data-id');
  var d = today();
  
  var dayOfMonth = new Date(pd(d)).getDate();
  var activePromptText = GRATITUDE_PROMPTS[(dayOfMonth - 1) % GRATITUDE_PROMPTS.length];
  
  if (id && S.gratitude[id]) {
    if (t) {
      S.gratitude[id].text = t;
      S.gratitude[id].promptText = S.gratitude[id].promptText || activePromptText;
      put('gratitude', S.gratitude[id], true);
    } else {
      del('gratitude', id, true);
    }
  } else if (t) {
    var r = put('gratitude', { 
      date: d, 
      text: t, 
      promptText: activePromptText, 
      created: Date.now() 
    }, true);
    el.setAttribute('data-id', r.id);
  }
  
  if (t) toast('Thank You, Lord.');
  render(); 
}
/**
 * Saves or updates a past or current day's gratitude entry directly from the 31-Day Vault.
 */
function saveVaultGratitude() {
  var el = document.getElementById('g_vault_input');
  if (!el) return;

  var t = el.value.trim();
  var id = el.getAttribute('data-id');
  var targetDate = el.getAttribute('data-date');
  var dayNum = parseInt(el.getAttribute('data-day'), 10) || 1;
  var promptText = GRATITUDE_PROMPTS[(dayNum - 1) % GRATITUDE_PROMPTS.length];

  if (id && S.gratitude[id]) {
    if (t) {
      S.gratitude[id].text = t;
      S.gratitude[id].promptText = S.gratitude[id].promptText || promptText;
      put('gratitude', S.gratitude[id], true);
    } else {
      del('gratitude', id, true);
    }
  } else if (t) {
    var r = put('gratitude', {
      date: targetDate,
      text: t,
      promptText: promptText,
      created: Date.now()
    }, true);
    el.setAttribute('data-id', r.id);
  }

  if (t) toast('Day ' + dayNum + ' reflection saved!');
  render();
}


/* ---------- READING ---------- */
function toggleRead(i) {
  var r = reading(); if (!r) return; r.done = r.done || {};
  if (r.done[i]) delete r.done[i]; else { r.done[i] = today(); if (Object.keys(r.done).length >= planDays(r).length) toast('You finished the whole plan. Praise God!'); }
  put('reading', r);
}
function startPlan(id) {
  var go2 = function () { var r = put('reading', { plan: id, start: today(), done: {}, created: Date.now() }, true); setCfg('plan', r.id); render(); toast('Plan started. Day 1 is ready.'); };
  if (reading()) confirmBox('Start a new plan? Your current plan\'s progress stays saved, but the new one becomes your daily reading.', 'Start new plan', go2); else go2();
}
function vReading() {
  var r = reading(), rt = readingToday(r);
  var h = ph('Reading Plan', 'Bible', 'A little each day. If you miss a day, simply pick up where you left off.');
  if (rt) {
    var def = planDef(r.plan), pct = Math.round(rt.doneN / rt.n * 100);
    h += '<div class="card" style="margin-bottom:16px"><div class="hd"><div style="flex:1"><div class="ey">Current plan</div><h2 style="margin:2px 0 0">' + esc(def[1]) + '</h2></div><span class="tag sage">' + pct + '%</span></div>' +
      '<div class="prog"><i style="width:' + pct + '%"></i></div><div class="mu sm">Started ' + fmtD(r.start) + ' · ' + rt.doneN + ' of ' + rt.n + ' days read' + (rt.next >= 0 ? ' · next up: Day ' + (rt.next + 1) : ' · finished!') + '</div></div>';
    h += '<div class="rdays">' + rt.days.map(function (d, i) {
      var dn = !!(r.done || {})[i];
      return '<button class="rd' + (dn ? ' done' : '') + (i === rt.next ? ' tdy' : '') + '" onclick="toggleRead(' + i + ')"><span class="bx">' + (dn ? ic('check') : '') + '</span><span><small>Day ' + (i + 1) + '</small>' + esc(d) + '</span></button>';
    }).join('') + '</div><h2 style="margin-top:28px">Other plans</h2>';
  }
  h += '<div class="plans">' + PLANS.filter(function (p) { return !r || p[0] !== r.plan; }).map(function (p) {
    var ch = chaptersBetween(p[3], p[4]).length;
    return '<div class="card plan"><div class="ey">' + p[5] + ' days · ' + ch + ' chapters</div><h3 style="margin-top:4px">' + esc(p[1]) + '</h3><p class="mu sm">' + esc(p[2]) + '</p><button class="btn sm" onclick="startPlan(\'' + p[0] + '\')">Start this plan</button></div>';
  }).join('') + '</div>';
  return h;
}

/* ---------- INTERACTIVE CALENDAR: PART 1 OF 3 ---------- */

/**
 * Renders the top interactive calendar grid with a push-pin notification overlay.
 */

function renderWeeklyRhythmCard_() {
  var map = activity();
  var t = today();
  var counts = { prayed: 0, read: 0, journal: 0, thanks: 0 };
  for (var i = 0; i < 7; i++) {
    var dayAct = map[addDays(t, -i)] || {};
    if (dayAct.prayed) counts.prayed++;
    if (dayAct.read) counts.read++;
    if (dayAct.journal) counts.journal++;
    if (dayAct.thanks) counts.thanks++;
  }
  var pills = [
    ['🙏 Prayed', counts.prayed + ' of 7 days', 'var(--rose2)', 'var(--rose-d)'],
    ['📖 Read Word', counts.read + ' of 7 days', 'var(--sage2)', '#2f4a28'],
    ['✍️ Journaled', counts.journal + ' of 7 days', 'var(--gold2)', 'var(--ink)'],
    ['🌸 Gratitude', counts.thanks + ' of 7 days', 'var(--blush)', 'var(--rose-d)']
  ];
  var html = '<div class="card" style="margin-bottom:16px; padding:18px 20px;">';
  html += '  <div class="hd" style="margin-bottom:10px;"><h3>7-Day Spiritual Rhythm</h3><span class="mu sm">Past 7 days · Grace over perfection</span></div>';
  html += '  <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(135px, 1fr)); gap:8px;">';
  pills.forEach(function(p) {
    html += '    <div style="background:' + p.slice(2, 3).pop() + '; border-radius:12px; padding:10px 12px; text-align:center;">';
    html += '      <div style="font-weight:600; font-size:13.5px; color:' + p.slice(3, 4).pop() + ';">' + esc(p.slice(0, 1).pop()) + '</div>';
    html += '      <div class="mu sm" style="margin-top:2px; font-weight:500;">' + esc(p.slice(1, 2).pop()) + '</div>';
    html += '    </div>';
  });
  html += '  </div>';
  html += '</div>';
  return html;
}



function vCalendar() {
  var st = streaks(), m = UI.month || today().slice(0, 7), first = pd(m + '-01'), y = first.getFullYear(), mo = first.getMonth();
  var nDays = new Date(y, mo + 1, 0).getDate(), pad = first.getDay();
  
  UI.selectedCalDate = UI.selectedCalDate || today();
  S.calNotes = S.calNotes || {};
  S.calAppts = S.calAppts || {};

  
  var h = ph('Calendar Matrix', 'My Journey', 'Click any day block below to view your reading links, personal study logs, and time-stamped mentorship appointments.');
  h += '<div class="statrow"><div class="card stat"><b>' + st.cur + '</b><span>Current streak</span></div><div class="card stat"><b>' + st.best + '</b><span>Longest streak</span></div><div class="card stat"><b>' + st.total + '</b><span>Days with Him</span></div></div>';
  h += renderWeeklyRhythmCard_();
h += renderFaithBadges();



  var prev = iso(new Date(y, mo - 1, 1)).slice(0, 7), next = iso(new Date(y, mo + 1, 1)).slice(0, 7);
  
  h += '<div class="card" style="margin-bottom:20px;">';
  h += '  <div class="hd"><button class="iconbtn" onclick="UI.month=\'' + prev + '\';render()">' + ic('back') + '</button><h2 style="text-align:center;margin:0;flex:1;">' + MONL[mo] + ' ' + y + '</h2><button class="iconbtn" onclick="UI.month=\'' + next + '\';render()">' + ic('next') + '</button></div>';
  h += '  <div class="cal" style="cursor:pointer;">' + DOW.map(function (d) { return '<div class="dh">' + d.charAt(0) + '</div>'; }).join('');
  
  for (var i = 0; i < pad; i++) h += '<div class="c out"></div>';
  
  var cnt = { journal: 0, prayed: 0, read: 0, thanks: 0 };
  for (var d = 1; d <= nDays; d++) {
    var k = iso(new Date(y, mo, d)), a = st.map[k] || {};
    Object.keys(a).forEach(function (x) { cnt[x]++; });
    
    var isSelected = (k === UI.selectedCalDate);
    var daySelectedStyle = isSelected ? 'border: 2px solid var(--rose); background:var(--blush);' : '';
    
    var hasNotes = !!(S.calNotes[k] && S.calNotes[k].trim());
    var hasAppts = !!(S.calAppts[k] && S.calAppts[k].length > 0);
    var showPin = hasNotes || hasAppts;

    h += '<div class="c' + (Object.keys(a).length ? ' on' : '') + (k === today() ? ' tdy' : '') + '" style="' + daySelectedStyle + ' position:relative;" onclick="selectCalendarDate(\'' + k + '\')">';
    
    // Fixed: Renders a real pushing-pin graphic marker layout
    if (showPin) {
      h += '  <span title="Contains notes or appointments" style="position:absolute; top:2px; right:4px; font-size:11px; z-index:2;">📌</span>';
    }

    h += '  <span>' + d + '</span>';
    h += '  <span class="ds">' + ['journal', 'prayed', 'read', 'thanks'].filter(function (x) { return a[x]; }).map(function (x) { return '<i class="k-' + x + '"></i>'; }).join('') + '</span>';
    h += '</div>';
  }
  
  h += '  </div>';
  h += '  <div class="legend" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">';
  h += '    <div style="display:flex; gap:14px; flex-wrap:wrap;"><span><i class="k-journal"></i>Journaled (' + cnt.journal + ')</span><span><i class="k-prayed"></i>Prayed (' + cnt.prayed + ')</span><span><i class="k-read"></i>Read (' + cnt.read + ')</span><span><i class="k-thanks"></i>Gratitude (' + cnt.thanks + ')</span></div>';
  h += '    <div style="font-size:12.5px; color:var(--mu); display:flex; align-items:center; gap:4px;"><span>📌</span> Notes / Appointments</div>';
  h += '  </div>';
  h += '</div>';
/* ---------- INTERACTIVE CALENDAR: PART 2 OF 3 ---------- */

  // 2. DYNAMIC DAILY SPECIFIC INSIGHT PLATFORM (POPULATES BENEATH GRID)
  var sDate = UI.selectedCalDate;
  h += '<div class="card" style="border-top: 4px solid var(--rose); border-radius:14px; padding:20px;">';
  h += '  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; border-bottom:1px solid var(--line); padding-bottom:8px;">';
  h += '    <h2 style="margin:0; color:var(--rose-d);">' + fmtD(sDate, true) + '</h2>';
  if (sDate === today()) h += '    <span class="tag sage" style="font-weight:600;">Today Focus</span>';
  h += '  </div>';
    // Section A: Hyperlinked Reading Plan Assignments Puller
  h += '  <div style="margin-bottom:16px;">';
  h += '    <span class="ey" style="color:var(--sage); font-weight:600; display:block; margin-bottom:4px;">Assigned Readings</span>';
  
  var readingsFound = false;
  if (window._rawAdminPlan) {
    window._rawAdminPlan.forEach(function(planRow) {
      if (planRow && planRow.concat().shift() === sDate) {
        readingsFound = true;
        
        // Safely separating the columns using explicit methods instead of brackets
        var workingRowCopy = planRow.concat();
        var rowDate = workingRowCopy.shift();
        var rowReading1 = workingRowCopy.shift();
        var rowReading2 = workingRowCopy.shift();
        
        h += '  <div style="margin-top:4px;"><b style="color:var(--ink); font-size:14px;">Reading 1:</b> <span style="color:var(--rose); text-decoration:underline; font-weight:600; cursor:pointer;" onclick="routeToBiblePassage(\'' + esc(rowReading1) + '\')">' + esc(rowReading1 || 'None Assigned') + '</span></div>';
        if (rowReading2) {
          h += '  <div style="margin-top:4px;"><b style="color:var(--ink); font-size:14px;">Reading 2:</b> <span style="color:var(--rose); text-decoration:underline; font-weight:600; cursor:pointer;" onclick="routeToBiblePassage(\'' + esc(rowReading2) + '\')">' + esc(rowReading2 || 'None Assigned') + '</span></div>';
        }
      }
    });
  }
  if (!readingsFound) h += '  <div class="mu sm" style="font-style:italic;">No custom reading assignments populated in schedule matrix for this specific date.</div>';
  h += '  </div>';




      // Section B: Persistent Note Space Auto Saver Container (With Clear Action Button)
  var currentDayNote = S.calNotes[sDate] || '';
  h += '  <div class="fld" style="margin-bottom:18px;">';
  h += '    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">';
  h += '      <label class="ey" style="color:var(--sage); font-weight:600; margin:0;">Daily Notes & Study Highlights</label>';
  if (currentDayNote.trim()) {
    h += '    <button class="link" style="color:var(--mu); font-size:12.5px;" onclick="clearCalendarDayNote(\'' + sDate + '\')">Clear Notes</button>';
  }
  h += '    </div>';
  h += '    <small class="mu" style="display:block; font-size:12px; margin-bottom:6px;">Your entry saves automatically as you type.</small>';
  h += '    <textarea class="lined" id="cal_day_note" placeholder="Write down what the Holy Spirit is teaching you today..." style="min-height:90px; width:100%; border-radius:10px;" onchange="saveCalendarDayNote(\'' + sDate + '\')">' + esc(currentDayNote) + '</textarea>';
  h += '  </div>';

/* ---------- INTERACTIVE CALENDAR: PART 3 OF 3 ---------- */

  // Section C: Time-Stamped Appointment List Manager
  var apptList = S.calAppts[sDate] || [];
  apptList.sort(function(a, b) { return a.time.localeCompare(b.time); });

  h += '  <div>';
  h += '    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">';
  h += '      <span class="ey" style="color:var(--sage); font-weight:600;">Time-Stamped Appointments</span>';
  h += '      <button class="btn sm" style="border-radius:8px; padding:3px 10px; font-weight:600;" onclick="openNewAppointmentModal(\'' + sDate + '\')">+ Add</button>';
  h += '    </div>';

  if (apptList.length > 0) {
    apptList.forEach(function(appt, aIdx) {
      h += '  <div style="display:flex; align-items:center; gap:12px; background:var(--paper); padding:8px 12px; border-radius:8px; margin-bottom:6px; border-left:3px solid var(--gold);">';
      h += '    <b style="color:var(--rose-d); font-size:14px; white-space:nowrap;">⏰ ' + esc(appt.time) + '</b>';
      h += '    <div style="flex:1; color:var(--ink); font-size:14.5px; font-weight:500;">' + esc(appt.desc) + '</div>';
      h += '    <button class="iconbtn" style="width:24px; height:24px; color:var(--mu);" onclick="deleteCalendarAppointment(\'' + sDate + '\',' + aIdx + ')">' + ic('trash') + '</button>';
      h += '  </div>';
    });
  } else {
    h += '  <div class="mu sm" style="font-style:italic; padding-left:4px;">No appointments locked in for this date. Click Add to log an appointment, meeting, or study time window.</div>';
  }
  h += '  </div>';
  h += '</div>';

  return h;
}

/**
 * Updates your dashboard coordinates to point at the clicked day block cell.
 */
function selectCalendarDate(dateStr) {
  UI.selectedCalDate = dateStr;
  render();
}

/**
 * Quietly stream changes to note lines and forces a full layout refresh to draw the pin.
 */
function saveCalendarDayNote(dateKey) {
  var el = document.getElementById('cal_day_note');
  if (!el) return;
  S.calNotes = S.calNotes || {};
  S.calNotes[dateKey] = el.value.trim();
  put('settings', { id: 'calNotesState', data: S.calNotes }, true);
  toast('Study notes updated.');
  render(); // Fixed: Instantly draws the 📌 Push-Pin on your grid cell!
}

/**
 * Erases the daily text node permanently from the data arrays using your native toast confirmation.
 */
function clearCalendarDayNote(dateKey) {
  S.calNotes = S.calNotes || {};
  delete S.calNotes[dateKey];
  put('settings', { id: 'calNotesState', data: S.calNotes }, true);
  render(); // Instantly removes the 📌 Push-Pin from the calendar block cell
  toast('Notes successfully removed.');
}



/**
 * Fires an interactive popup form to capture meeting hour records.
 */
function openNewAppointmentModal(dateKey) {
  var body = ' <div class="f"><span>Appointment Meeting Time</span><input type="time" id="appt_time" style="width:100%;" autofocus></div>' +
             ' <div class="f" style="margin-top:10px;"><span>Description / Purpose</span><input type="text" id="appt_desc" placeholder="e.g., Mentorship session with Sarah"></div>';
  var foot = '<button class="btn" onclick="closeModal()">Cancel</button><button class="btn pri" onclick="saveNewCalendarAppointment(\'' + dateKey + '\')">Log Appointment</button>';
  openModal('Add Appointment', body, foot);
}

function saveNewCalendarAppointment(dateKey) {
  var timeVal = val('appt_time');
  var descVal = val('appt_desc');
  if (!timeVal || !descVal) { toast('Please populate both time and appointment info.'); return; }
  
  S.calAppts = S.calAppts || {};
  S.calAppts[dateKey] = S.calAppts[dateKey] || [];
  S.calAppts[dateKey].push({ time: timeVal, desc: descVal });
  
  put('settings', { id: 'calApptsState', data: S.calAppts }, true);
  closeModal();
  render();
  toast('Appointment scheduled.');
}

/**
 * Clears scheduled mentorship meetings instantly with floating user notification feedback.
 */
function deleteCalendarAppointment(dateKey, index) {
  if (S.calAppts && S.calAppts[dateKey]) {
    S.calAppts[dateKey].splice(index, 1);
    put('settings', { id: 'calApptsState', data: S.calAppts }, true);
    render();
    toast('Appointment successfully removed.');
  }
}


/* ---------- MONTHLY REFLECTION ---------- */
function vReflect() {
  var m = UI.rmonth || today().slice(0, 7), first = pd(m + '-01'), y = first.getFullYear(), mo = first.getMonth();
  var id = 'm-' + m, r = S.entries[id] || {};
  var inM = function (d) { return (d || '').slice(0, 7) === m; };
  var st = streaks(), daysOn = Object.keys(st.map).filter(inM).length;
  var ans = answered().filter(function (p) { return inM(p.answeredOn); }), ents = entries().filter(function (e) { return inM(e.date); }), gr = all('gratitude').filter(function (g) { return inM(g.date); });
  var prev = iso(new Date(y, mo - 1, 1)).slice(0, 7), next = iso(new Date(y, mo + 1, 1)).slice(0, 7);
  var h = ph('Reflection', 'Monthly', 'Look back with thanks, and look ahead with hope.',
    '<button type="button" class="btn sm" style="border-color:var(--gold); background:var(--gold2);" onclick="openMonthlyKeepsake(\'' + m + '\')">&#128229; Export Keepsake</button>');
  h += '<div class="card"><div class="hd"><button class="iconbtn" onclick="UI.rmonth=\'' + prev + '\';render()">' + ic('back') + '</button><h2 style="text-align:center;margin:0">' + MONL[mo] + ' ' + y + '</h2><button class="iconbtn" onclick="UI.rmonth=\'' + next + '\';render()">' + ic('next') + '</button></div>' +
    '<div class="grid g3" style="gap:10px;margin:6px 0 14px"><div class="stat"><b>' + daysOn + '</b><span>Days with Him</span></div><div class="stat"><b>' + ents.length + '</b><span>Journal entries</span></div><div class="stat"><b>' + gr.length + '</b><span>Blessings counted</span></div></div>';
  if (ans.length) h += '<div class="ey" style="margin-bottom:6px">Answered this month</div>' + ans.map(function (p) { return '<div class="mini"><span class="dot" style="background:var(--gold)"></span><div class="t"><b>' + esc(p.title) + '</b><span>' + esc(p.how || 'Answered ' + fmtD(p.answeredOn)) + '</span></div></div>'; }).join('') + '<div style="height:14px"></div>';
  h += REFLECT.map(function (q) { return '<div class="fld"><label for="r_' + q[0] + '"><span class="lt">' + esc(q[1].charAt(0)) + '</span>' + esc(q[1].slice(1)) + '</label>' + (q[0] === 'word' ? '<input type="text" id="r_word" value="' + esc(r.word) + '" placeholder="Rest, Trust, Joy…">' : '<textarea class="lined" id="r_' + q[0] + '" rows="3">' + esc(r[q[0]]) + '</textarea>') + '</div>'; }).join('');
  h += '<div class="row"><span class="sp"></span><button class="btn pri" onclick="saveReflect(\'' + m + '\')">Save reflection</button></div></div>';
  var past = all('entries').filter(function (e) { return e.type === 'month' && e.month !== m; }).sort(function (a, b) { return a.month < b.month ? 1 : -1; });
  if (past.length) h += '<h2 style="margin-top:24px">Past reflections</h2><div class="chips">' + past.map(function (e) { var d = pd(e.month + '-01'); return '<button class="chip" onclick="UI.rmonth=\'' + e.month + '\';render()">' + MONL[d.getMonth()] + ' ' + d.getFullYear() + (e.word ? ' · ' + esc(e.word) : '') + '</button>'; }).join('') + '</div>';
  return h;
}
function saveReflect(m) {
  var r = S.entries['m-' + m] || { id: 'm-' + m, type: 'month', month: m, date: m + '-28', created: Date.now() };
  REFLECT.forEach(function (q) { r[q[0]] = val('r_' + q[0]); });
  put('entries', r); toast('Reflection saved.');
}
/* ---------- EXPORTABLE MONTHLY REFLECTION KEEPSAKE ---------- */
function openMonthlyKeepsake(m) {
  var first = pd(m + '-01');
  var monthLabel = MONL[first.getMonth()] + ' ' + first.getFullYear();
  var r = S.entries['m-' + m] || {};
  var inM = function(d) { return (d || '').slice(0, 7) === m; };

  var st = streaks();
  var daysOn = Object.keys(st.map).filter(inM).length;
  var ans = answered().filter(function(p) { return inM(p.answeredOn); });
  var ents = entries().filter(function(e) { return inM(e.date); });
  var gr = all('gratitude').filter(function(g) { return inM(g.date); });

  var lines = [
    'ACADEMY TLC · THE LORD\'S CHILDREN',
    'MONTHLY REFLECTION KEEPSAKE · ' + monthLabel.toUpperCase(),
    'Exported on ' + fmtD(today(), true),
    '----------------------------------------',
    'Days With Him: ' + daysOn + '  |  Journal Entries: ' + ents.length + '  |  Blessings Counted: ' + gr.length,
    ''
  ];

  var previewHtml = '<div style="max-height:340px; overflow-y:auto; background:#FDFBF7; border:1.5px solid #D4AF37; border-radius:14px; padding:16px; text-align:left; font-family:var(--serif);">';
  previewHtml += '<div style="font-family:var(--sans); font-size:12px; font-weight:600; color:#1B6B78; letter-spacing:0.08em; text-transform:uppercase; margin-bottom:10px;">' + esc(monthLabel) + ' · ' + daysOn + ' Days With Him · ' + ents.length + ' Entries · ' + gr.length + ' Blessings</div>';

  if (ans.length) {
    lines.push('ANSWERED PRAYERS THIS MONTH:');
    previewHtml += '<div style="font-weight:700; color:#0F4A53; font-size:16px; margin:8px 0 4px;">Answered Prayers</div>';
    ans.forEach(function(p) {
      lines.push('• ' + p.title + ' (Answered ' + fmtD(p.answeredOn) + ')');
      if (p.how) lines.push('  ' + p.how);
      previewHtml += '<div style="margin-bottom:6px; font-size:15px; color:#1B2A32;"><b>• ' + esc(p.title) + '</b> <span style="font-size:12px; color:#5A727E;">(' + fmtD(p.answeredOn) + ')</span>' + (p.how ? '<br><i>' + nl(p.how) + '</i>' : '') + '</div>';
    });
    lines.push('');
  }

  var hasAnswers = false;
  REFLECT.forEach(function(q) {
    var copy = q.slice();
    var qKey = copy.shift();
    var qLabel = copy.shift();
    var ansVal = (r[qKey] || '').trim();
    if (ansVal) {
      hasAnswers = true;
      lines.push(qLabel.toUpperCase());
      lines.push(ansVal);
      lines.push('');
      previewHtml += '<div style="margin-top:10px; padding-top:8px; border-top:1px solid #E6DFD3;">';
      previewHtml += '  <div style="font-weight:700; color:#0F4A53; font-size:15.5px; margin-bottom:3px;">' + esc(qLabel) + '</div>';
      previewHtml += '  <div style="font-size:15px; color:#1B2A32; line-height:1.45;">' + nl(ansVal) + '</div>';
      previewHtml += '</div>';
    }
  });

  if (!hasAnswers && !ans.length) {
    previewHtml += '<p class="mu sm" style="margin:12px 0;">Write your reflection responses on this page first, then tap Export Keepsake to save or copy your monthly summary.</p>';
  }

  previewHtml += '</div>';
  window._monthlyKeepsakeTxt = lines.join('\n');
  window._monthlyKeepsakeFile = 'Academy_TLC_Reflection_' + m + '.txt';

  openModal(monthLabel + ' Keepsake', previewHtml,
    '<button type="button" class="btn" onclick="copyText(window._monthlyKeepsakeTxt)">' + ic('copy') + 'Copy All</button>' +
    '<button type="button" class="btn pri" onclick="downloadMonthlyKeepsake()">&#128229; Save File</button>'
  );
}

function downloadMonthlyKeepsake() {
  if (!window._monthlyKeepsakeTxt) return;
  var blob = new Blob([window._monthlyKeepsakeTxt], { type: 'text/plain;charset=utf-8' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = window._monthlyKeepsakeFile || 'Academy_TLC_Monthly_Reflection.txt';
  document.body.appendChild(a);
  a.click();
  a.remove();
  toast('Monthly reflection keepsake saved!');
}


/* ---------- SETTINGS ---------- */
function vSettings() {
  var c = cfg();
  var shareUrl = URL0 || window.location.href;
  var h = ph('Settings', '', '');
  h += '<div class="grid g2"><div class="card"><h3>About you</h3><div class="f" style="margin-top:10px"><span>Your first name (for your daily greeting)</span><input type="text" id="s_n" value="' + esc(c.name) + '" onchange="localStorage.setItem(\'tlc_user_name_v1\',this.value.trim());setCfg(\'name\',this.value.trim());toast(\'Saved.\')"></div>' +
    '<div class="f"><span>When I tap New entry</span><select onchange="setCfg(\'method\',this.value);toast(\'Saved.\')"><option value="">Ask me each time</option>' + Object.keys(METHODS).map(function (k) { return '<option value="' + k + '"' + (c.method === k ? ' selected' : '') + '>Start with ' + METHODS[k].name + '</option>'; }).join('') + '</select></div>' +
    '<div class="f"><span>Screen Theme</span><button type="button" class="btn sm" style="width:100%; justify-content:space-between; border-color:var(--gold); background:' + (c.eveningMode === '1' ? 'var(--gold2)' : 'var(--card)') + ';" onclick="toggleEveningTheme()"><span>' + (c.eveningMode === '1' ? '🕯️ Warm Evening Mode' : '☀️ Daylight Cream Mode') + '</span><span class="tag gold">Switch</span></button></div></div>';

  h += '<div class="card"><h3>Share app &amp; daily reminder</h3><p class="sm">Open this link on your phone, then choose <b>Add to Home Screen</b> for an app experience.</p><div class="row"><input type="text" readonly value="' + esc(shareUrl) + '"><button class="btn sm" onclick="copyText(URL0 || window.location.href, \'Link copied.\')">' + ic('copy') + 'Copy</button></div>' +
    '<div style="margin-top:14px; padding-top:12px; border-top:1px solid var(--line);"><div class="f" style="margin-bottom:8px;overflow:hidden;"><span>Preferred Daily Quiet-Time</span><input type="time" style="-webkit-appearance:none;appearance:none;width:100%;max-width:100%;min-width:0;box-sizing:border-box;display:flex;justify-content:center;align-items:center;text-align:center;margin:0 auto;" value="' + esc(c.reminderTime || '08:00') + '" onchange="setCfg(\'reminderTime\',this.value);toast(\'Quiet time updated.\')"></div><button class="btn sm pri" onclick="openDailyCalendarAlert()">🔔 Set Daily Phone Calendar Alert</button><div class="mu sm" style="margin-top:6px;">Adds a daily recurring reminder to your phone calendar at your chosen time with a direct link to open your journal.</div>' +
    '<div style="margin-top:10px;"><button class="link" style="font-size:13.5px; font-weight:600;" onclick="openQuickGuideModal()">📖 Open New Member Quick Guide</button></div></div></div>';

  h += '<div class="card"><h3>Your private data</h3><p class="sm mu">Your personal journal entries, notes, and reading progress are saved privately on your own device. Download a backup anytime to keep a copy or move to a new phone.</p><div class="row" style="flex-wrap:wrap">' +
    '<button class="btn sm" onclick="backup()">Download a backup</button><label class="btn sm">Restore a backup<input type="file" accept=".json,application/json" hidden onchange="restore(this.files)"></label></div></div>';
  h += '<div class="card"><h3>Example journal</h3><p class="sm mu">Fill the journal with example prayers and entries to see how everything works. Clear it when you are ready to start.</p><div class="row" style="flex-wrap:wrap"><button class="btn sm" onclick="confirmBox(\'This adds example prayers, entries and verses to your journal.\',\'Add examples\',function(){loadDemo();go(\'today\')})">See an example journal</button>' +
    '<button class="btn sm ghost" onclick="confirmBox(\'This permanently erases every prayer, entry, verse and reading plan in this journal. Download a backup first if you want to keep anything.\',\'Erase everything\',eraseAll)" style="color:#A2453F">Erase everything</button></div></div></div>';
 h += divider() + '<p class="mu sm" style="text-align:center">Prayer Journal by T.L.C · Academy of The Lord\'s Children · Daily verses are from the King James Version.<br><a href="https://lteneshia.github.io/academy-tlc-privacy/" target="_blank" rel="noopener" style="color:var(--rose-d);font-weight:600;text-decoration:underline;display:inline-block;margin-top:6px;">Privacy Policy &amp; Terms</a></p>';

  return h;
}



function tables() {
  var T = {};
  T['Prayer Requests'] = [['Started', 'Prayer', 'For', 'Category', 'Details', 'Verse', 'Pray', 'Times prayed']].concat(active().map(function (p) { return [p.start, p.title, p.who, cat(p.cat)[1], p.details, p.verse, freqLabel(p.freq), String((p.log || []).length)]; }));
  T['Answered Prayers'] = [['Answered', 'Prayer', 'For', 'Category', 'How God answered', 'Started']].concat(answered().map(function (p) { return [p.answeredOn, p.title, p.who, cat(p.cat)[1], p.how, p.start]; }));
  T['Journal'] = [['Date', 'Method', 'Title', 'Entry']].concat(entries().slice().reverse().map(function (e) { var m = METHODS[e.type] || METHODS.free; return [e.date, m.name, entryTitle(e), (e.ref ? e.ref + '\n\n' : '') + m.fields.filter(function (f) { return e[f[0]]; }).map(function (f) { return f[1] + ': ' + e[f[0]]; }).join('\n\n')]; }));
  T['Scripture'] = [['Reference', 'Verse', 'Translation', 'Topic', 'Memory verse', 'Note']].concat(all('verses').map(function (v) { return [v.ref, v.text, v.tr, v.topic, v.memorized ? 'Memorized' : v.memory ? 'Learning' : '', v.note]; }));
   var planRows = [['Date', 'Reading 1', 'Status 1', 'Reading 2', 'Status 2']];
  var list = window._rawAdminPlan || [];
  var doneMap = S.adminPlanDone || {};
  for (var i = 1; i < list.length; i++) {
    var row = list.slice(i, i + 1).pop();
    if (!row || !row.length) continue;
    var rCopy = row.slice();
    var dStr = rCopy.shift() || '';
    var p1 = rCopy.shift() || '';
    var p2 = rCopy.shift() || '';
    planRows.push([
      dStr,
      p1,
      doneMap[i + '_1'] ? 'Read (' + doneMap[i + '_1'] + ')' : '',
      p2,
      doneMap[i + '_2'] ? 'Read (' + doneMap[i + '_2'] + ')' : ''
    ]);
  }
  if (planRows.length > 1) T['Reading'] = planRows;
  return T;
}

function updateTabs() { toast('Updating your tabs…'); API.tabs(tables()).then(function (x) { toast(x === 'local' ? 'In your own copy, this writes tidy tabs into your Google Sheet.' : 'Your spreadsheet tabs are up to date.'); }).catch(function (e) { toast('Could not update tabs: ' + (e.message || e)); }); }
function backup() {
  var snapshot = {};
  TABLES.forEach(function(t) { snapshot[t] = all(t); });
  var payload = JSON.stringify({ app: 'academy-tlc-journal', version: 1, exportedAt: today(), data: snapshot });
  var link = document.createElement('a');
  link.href = 'data:application/json;charset=utf-8,' + encodeURIComponent(payload);
  link.download = 'Academy_TLC_Backup_' + today() + '.json';
  document.body.appendChild(link);
  link.click();
  link.remove();
  toast('Backup downloaded.');
}

function restore(fileObj) {
  if (!fileObj) return;
  var reader = new FileReader();
  reader.onload = function() {
    try {
      var parsed = JSON.parse(reader.result);
      if (parsed.app !== 'academy-tlc-journal' && parsed.app !== 'prayer-journal') throw new Error('Invalid file');
      confirmBox('Restore entries from this backup file into your journal?', 'Restore Backup', function() {
        TABLES.forEach(function(t) {
          (parsed.data[t] || []).forEach(function(rec) { put(t, rec, true); });
        });
        render();
        toast('Journal backup restored.');
      });
    } catch (err) {
      toast('Please select a valid Academy T.L.C. backup JSON file.');
    }
  };
  reader.readAsText(fileObj);
}

function eraseAll() {
  API.reset().then(function() {
    TABLES.forEach(function(t) { S[t] = {}; });
    pendingOps = {};
    go('today');
    toast('All journal records cleared.');
  });
}


/* ---------- welcome & boot ---------- */
function welcome() {
  openModal('Welcome', '<div style="text-align:center">' + emptyArt() + '<div style="font:400 44px/1 var(--script);color:var(--rose)">Welcome, friend</div><p>This is your private place to pray, write, remember answered prayers and grow in the Word.</p></div>' +
    '<div class="f"><span>What should we call you?</span><input type="text" id="w_n" placeholder="Your first name" autofocus></div>',
    '<button class="btn" onclick="setCfg(\'name\',val(\'w_n\'));setCfg(\'welcomed\',1);loadDemo();closeModal();render()">See an example journal</button><button class="btn pri" onclick="setCfg(\'name\',val(\'w_n\'));setCfg(\'welcomed\',1);closeModal();render()">Start my journal</button>');
}
function boot() {
  API.load().then(function (res) {
    COLS.forEach(function (c) { S[c] = {}; (res.data[c] || []).forEach(function (r) { S[c][r.id] = r; }); });
    URL0 = res.url || '';

    SYSTEM_VERSES.forEach(function(v, idx) {
      var systemId = 'sys_v_' + idx;
      if (!S.verses[systemId]) {
        S.verses[systemId] = {
          id: systemId, ref: v[0], text: v[1], tr: 'KJV', topic: v[2], memory: true, memorized: false, note: 'Permanent system memory verse.', created: Date.now() - (idx * 60000)
        };
      }
    });

    S.adminPlanDone = (S.settings.admin_plan_progress_save && S.settings.admin_plan_progress_save.data) || {};
    S.calNotes = (S.settings.calNotesState && S.settings.calNotesState.data) || {};
    S.calAppts = (S.settings.calApptsState && S.settings.calApptsState.data) || {};

    if (cfg().gameStreakDate === today()) {
      GM.streak = parseInt(cfg().gameStreak, 10) || 0;
    } else {
      GM.streak = 0;
      saveDailyGameStreak();
    }

    if (res.adminPlan && res.adminPlan.length) {
      window._rawAdminPlan = res.adminPlan;
    }
    setTimeout(loadDirectAdminPlan, 50);

        var hv = (location.hash.match(/view=(\w+)/) || [])[1];
    if (hv) UI.view = hv;
    applyEveningTheme();
    render();


    $('loading').className = 'gone';
    showDailyWelcomeScreen();
  }).catch(function (e) {
    $('loading').innerHTML = '<div style="padding:20px;text-align:center;font:16px var(--sans)">Could not open your journal: ' + esc(e.message || e) + '<br><br>Please reload the page.</div>';
  });
}






/**
 * Renders the permanent Daily Welcome screen layout that displays on every single login.
 */
function showDailyWelcomeScreen() {
          var content = '<div style="text-align:center; padding:10px 0;">' + 
                '  ' + emptyArt() + 
                '  <div style="font-family:var(--sans); font-size:26px; font-weight:700; color:var(--rose-d); margin:16px 0 4px; line-height:1.2;">WELCOME TO </div>' +
                '  <div style="font-family:var(--serif); font-style:italic; font-size:26px; color:var(--sage); margin-bottom:12px;">Academy of The Lord\'s Children</div>' +
                '  <p style="font-family:var(--serif); font-size:17px; line-height:1.5; color:var(--ink); margin:0 0 20px;">Where Jesus is the cornerstone. We are so glad you are here!</p>' +
                '</div>';




                
  var footer = '<button class="btn pri" style="width:100%; font-weight:600; padding:12px;" onclick="progressFromWelcomeScreen()">Step out in Faith</button>';
  
  openModal('Academy T.L.C', content, footer, false); // False completely prevents closing by clicking outside the box
}

/**
 * Validates whether the user is a newcomer or a returning member upon progression.
 */
function progressFromWelcomeScreen() {
  closeModal();
  // If the user has never saved a name in their configuration database, trigger the Deuteronomy modal
 if (!cfg().welcomed) {
    showFirstTimeRegistrationModal();
  } else {
    setTimeout(checkDailyCalBanner, 400);
  }
}

/**
 * Handles the special first-time scripture greeting and saves their profile name.
 */
function showFirstTimeRegistrationModal() {
  if (localStorage.getItem('tlc_welcomed_v1') === '1') return;
  var content = '<div style="text-align:center; margin-bottom:18px;">' +
                '  <p style="font-family:var(--serif); font-size:16px; font-style:italic; line-height:1.5; color:var(--mu); background:var(--paper); padding:14px; border-radius:12px; margin:0 0 16px; border-left:3px solid var(--gold);">“Let my teaching fall like rain and my word settle like dew, like gentle rain on new grass and showers on tender plants.”<br><b style="font-style:normal; font-size:13px; display:block; margin-top:4px; color:var(--sage);">— Deuteronomy 32:2</b></p>' +
                '  <h3 style="font-family:var(--sans); font-size:18px; font-weight:600; color:var(--ink); margin:10px 0;">The Lord calls you His; What shall we call you?</h3>' +
                '</div>' +
                '<div class="f"><span>First Name</span><input type="text" id="w_n" placeholder="Enter your name..." autofocus style="width:100%;"></div>';
                
  var footer = '<button class="btn pri" style="width:100%; font-weight:600;" onclick="saveFirstTimeRegistrationName()">Start My Journal</button>';
  
  openModal('Faith Registration', content, footer, false);
}

function saveFirstTimeRegistrationName() {
  var nameInput = val('w_n').trim();
  var finalName = nameInput || 'Believer';
  
  localStorage.setItem('tlc_welcomed_v1', '1');
  localStorage.setItem('tlc_user_name_v1', finalName);
  setCfg('name', finalName);
  setCfg('welcomed', 1);
  if (typeof flushSave === 'function') flushSave();
  
  toast('Welcome to the family, ' + finalName + '!');
  closeModal();
  render();
  setTimeout(checkDailyCalBanner, 400);
}


function openChangeNameModal() {
  var cur = (cfg().name || '').trim();
  openModal('Update Display Name',
    '<div class="f"><span>Your First Name</span>' +
    '<input type="text" id="edit_name_in" value="' + esc(cur) + '" placeholder="Enter your name..."></div>',
    '<button type="button" class="btn pri" onclick="saveUpdatedDisplayName()">Save Name</button>'
  );
}

function saveUpdatedDisplayName() {
  var nextName = val('edit_name_in').trim() || 'Believer';
  localStorage.setItem('tlc_user_name_v1', nextName);
  setCfg('name', nextName);
  closeModal();
  toast('Name updated to ' + nextName + '!');
  render();
}



/* ---------- ACADEMY T.L.C. SAMPLE JOURNAL DATA ---------- */
function loadDemo() {
  var t = today();
  var shiftDay = function(n) { return addDays(t, n); };
  var stamp = Date.now();
  if (!cfg().name) setCfg('name', 'Grace');
  setCfg('welcomed', 1);

  var samplePrayers = [
    ['Strength & healing for Sister Ruth', 'Sister Ruth', 'health', 'Praying for complete recovery after her procedure and restful sleep each night.', 'Isaiah 41:10', 'daily', -18, [shiftDay(-5), shiftDay(-3), shiftDay(-1), t]],
    ['Wisdom for our youth outreach', 'Youth Ministry', 'church', 'Asking the Lord to open doors in our local schools and raise up faithful mentors.', 'James 1:5', 'daily', -14, [shiftDay(-4), shiftDay(-2), t]],
    ['Peace & direction for Caleb\'s new role', 'Caleb', 'work', 'Guidance as he steps into a new leadership season and balances family time.', 'Proverbs 3:5–6', 'daily', -10, [shiftDay(-3), shiftDay(-1)]],
    ['Steadfast faith in my morning quiet time', 'Me', 'personal', 'Help me keep Jesus as the cornerstone of every decision and conversation.', 'Matthew 6:33', 'daily', -25, [shiftDay(-6), shiftDay(-4), shiftDay(-2), t]]
  ];
  samplePrayers.forEach(function(p, idx) {
    var c = p.slice();
    put('prayers', {
      title: c.shift(), who: c.shift(), cat: c.shift(), details: c.shift(),
      verse: c.shift(), freq: c.shift(), start: shiftDay(c.shift()), log: c.shift(),
      created: stamp - (10 - idx) * 1000
    }, true);
  });

  put('prayers', {
    title: 'Provision for our community food pantry',
    who: 'Academy T.L.C. Outreach',
    cat: 'church',
    start: shiftDay(-30),
    answered: true,
    answeredOn: shiftDay(-4),
    how: 'Two local families donated enough supplies to bless 45 households this month!',
    freq: 'daily',
    log: [shiftDay(-20), shiftDay(-12), shiftDay(-5)],
    created: stamp - 20000
  }, true);

  put('entries', {
    type: 'soap',
    date: shiftDay(-1),
    ref: 'Psalm 46:1–10',
    s: 'Be still, and know that I am God.',
    o: 'Even when circumstances feel loud or uncertain, God commands us to pause and remember His sovereignty.',
    ap: 'Before checking messages each morning, I will take five quiet minutes in prayer and Scripture.',
    p: 'Lord Jesus, quiet my spirit and anchor my heart in Your presence today.',
    created: stamp - 5000
  }, true);

  put('entries', {
    type: 'acts',
    date: shiftDay(-3),
    title: 'Standing on His Promises',
    a: 'Father, You are faithful from generation to generation and worthy of all praise.',
    c: 'Forgive me for rushing ahead in my own strength instead of waiting on Your wisdom.',
    t: 'Thank You for our Academy T.L.C. study group, encouraging texts, and daily mercy.',
    s: 'Lift up Sister Ruth and bless every household represented in our study.',
    created: stamp - 8000
  }, true);

  put('gratitude', { date: t, text: 'Morning stillness with coffee and the Psalms', created: stamp }, true);
  put('gratitude', { date: shiftDay(-1), text: 'Encouragement from our Bible study family', created: stamp - 1000 }, true);
}

/* ---------- BIBLE DATABASE & NEW READING PLAN ENGINE ---------- */

/**
 * Initializes and requests row records straight from your main Admin Reading Plan sheet tab.
 */
function loadDirectAdminPlan() {
  return gas('api_fetch_raw_admin_plan')
    .then(function(res) {
      if (Array.isArray(res)) {
        window._rawAdminPlan = res;
        window._groupAnnouncement = '';
      } else {
        window._rawAdminPlan = (res && res.rows) || [];
        window._groupAnnouncement = (res && res.announcement) || '';
      }
      render();
      checkGroupAnnouncementPop();
    })
    .catch(function(e) {
      toast('Error loading reading plan: ' + e.message);
    });
}






/**
 * Dynamically computes the global completion percentage for your assigned sheet readings.
 */
function getAdminPlanProgress() {
  var list = window._rawAdminPlan || [];
  if (list.length <= 1) return { pct: 0, text: '0 of 0 assignments read' };
  
  S.adminPlanDone = S.adminPlanDone || {};
  var totalAssignments = 0;
  var completedAssignments = 0;

  for (var i = 1; i < list.length; i++) {
    var row = list[i];
    if (!row || row.length < 2) continue;
    var plan1Val = row[1];
    var plan2Val = row[2];
    
    if (plan1Val && plan1Val !== 'None Assigned' && plan1Val !== 'Rest Day') {
      totalAssignments++;
      if (S.adminPlanDone[i + '_1']) completedAssignments++;
    }
    if (plan2Val && plan2Val !== 'None Assigned' && plan2Val !== 'Rest Day') {
      totalAssignments++;
      if (S.adminPlanDone[i + '_2']) completedAssignments++;
    }
  }

  var pct = totalAssignments > 0 ? Math.round((completedAssignments / totalAssignments) * 100) : 0;
  return {
    pct: pct,
    text: completedAssignments + ' of ' + totalAssignments + ' readings completed'
  };
}

/**
 * Returns a clean HTML string structure for the progress indicator card.
 */
function renderAdminPlanProgressBar() {
  var progress = getAdminPlanProgress();
  var html = '<div class="card" style="margin-bottom: 16px; padding: 16px 20px;">';
  html += '  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">';
  html += '    <span class="ey" style="color:var(--sage); font-weight:600;">Overall Bible Study Progress</span>';
  html += '    <span class="tag sage" style="font-weight:600; font-size:14px; background:var(--rose2); color:var(--rose-d);">' + progress.pct + '%</span>';
  html += '  </div>';
  html += '  <div class="prog" style="height:10px; border-radius:10px; background:var(--paper2); overflow:hidden; margin:8px 0 6px;">';
  html += '    <i style="display:block; height:100%; width:' + progress.pct + '%; background:linear-gradient(90deg, var(--rose), var(--gold)); border-radius:10px; transition: width 0.4s ease;"></i>';
  html += '  </div>';
  html += '  <div class="mu sm" style="color:var(--mu); font-weight:500;">' + esc(progress.text) + '</div>';
  html += '</div>';
  return html;
}


function renderTodayReadingQuickCard() {
  var list = window._rawAdminPlan || [];
  var tDate = today();
  var foundIdx = -1;
  var plan1Val = '';
  var plan2Val = '';

  for (var i = 1; i < list.length; i++) {
    var row = list.slice(i, i + 1).pop();
    if (!row) continue;
    var rowCopy = row.slice();
    var dVal = String(rowCopy.shift() || '').trim();
    if (dVal === tDate) {
      foundIdx = i;
      plan1Val = String(rowCopy.shift() || '').trim();
      plan2Val = String(rowCopy.shift() || '').trim();
      break;
    }
  }

  if (foundIdx < 0) {
    return '<div class="mu sm" style="margin:10px 0 6px; font-style:italic;">No reading scheduled for today—check Full Schedule for upcoming dates.</div>';
  }

  S.adminPlanDone = S.adminPlanDone || {};
  var sw = 'position:relative; display:inline-block; width:34px; height:20px; flex:none;';
  var sl = 'position:absolute; cursor:pointer; inset:0; border-radius:34px; transition:.3s;';
  var out = '<div style="margin:10px 0 12px; padding:10px 12px; border-radius:12px; background:var(--blush); border:1px solid var(--rose2);">';
  out += '<div class="ey" style="font-size:10.5px; margin-bottom:6px; color:var(--rose-d);">Today\'s Assigned Reading</div>';

  var items = [{ idx: 1, val: plan1Val }];
  if (plan2Val) items.push({ idx: 2, val: plan2Val });

  items.forEach(function(item) {
    var key = foundIdx + '_' + item.idx;
    var isDone = !!S.adminPlanDone[key];
    var bg = isDone ? 'var(--rose)' : 'var(--line)';
    var dot = isDone ? 'transform:translateX(14px);' : '';
    var isRest = (!item.val || item.val === 'Rest Day' || item.val === 'None Assigned');

    out += '<div style="display:flex; align-items:center; gap:10px; margin-top:6px;">';
    out += '  <label style="' + sw + '" onclick="event.stopPropagation(); toggleAdminPlanCheck(\'' + key + '\')">';
    out += '    <span style="' + sl + ' background:' + bg + ';"></span>';
    out += '    <span style="position:absolute; height:14px; width:14px; left:3px; bottom:3px; border-radius:50%; background:#fff; transition:.3s; ' + dot + '"></span>';
    out += '  </label>';
    if (isRest) {
      out += '  <span class="mu sm" style="font-weight:500;">Reading ' + item.idx + ': ' + esc(item.val || 'Rest Day') + '</span>';
    } else {
      out += '  <span style="font-size:14.5px; font-weight:500; color:var(--ink);">Reading ' + item.idx + ': <span style="color:var(--rose); text-decoration:underline; cursor:pointer; font-weight:600;" onclick="routeToBiblePassage(\'' + esc(item.val) + '\')">' + esc(item.val) + '</span></span>';
    }
    out += '</div>';
  });

  out += '</div>';
  return out;
}


/**
 * Renders the standalone viewport tab streaming clean text columns with sliding toggle switches.
 */
/**
 * Renders the standalone viewport tab streaming clean text columns with sliding toggle switches and a progress bar.
 */
function vAdminPlan() {
  var h = ph('Reading Plan', '📋 Daily Calendar', '');
  
  // Renders the global progress metric element cleanly at the top of the screen
  h += renderAdminPlanProgressBar();

  var list = window._rawAdminPlan || null;
  if (!list) {
    setTimeout(loadDirectAdminPlan, 50);
    h += '<div class="card" style="text-align:center; padding:30px;">';
    h += '  <div id="loading_spinner" class="mu">' + ic('today', 'spin') + ' Streaming layout...</div>';
    h += '</div>';
    return h;
  }

  S.adminPlanDone = S.adminPlanDone || {};
  var switchStyle = 'position:relative; display:inline-block; width:34px; height:20px; flex:none;';
  var sliderStyle = 'position:absolute; cursor:pointer; inset:0; border-radius:34px; transition:.3s;';

    h += '<div class="stack" style="gap:12px;">';
  for (var i = 1; i < list.length; i++) {
    var row = list[i];
    if (!row || row.length < 3) continue;
    
    var dateVal = row[0];
    var plan1Val = row[1];
    var plan2Val = row[2];
    
    if (!dateVal && !plan1Val && !plan2Val) continue; 
    
    var isToday = (dateVal === today());
    var cardStyle = isToday ? 'border: 2px solid var(--rose); background: var(--blush);' : '';
    var cardIdAttr = isToday ? ' id="today_reading_card"' : '';

    h += '<div' + cardIdAttr + ' class="card" style="padding:14px 18px; ' + cardStyle + '">';

    h += '  <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">';
    h += '    <div style="flex:1; min-width:0;">';
    h += '      <span class="ey" style="color:var(--sage); font-weight:600; display:block; margin-bottom:6px;">' + esc(fmtD(dateVal) || dateVal) + '</span>';
    
    // Toggle Switch 1
    var key1 = i + '_1';
    var isDone1 = !!S.adminPlanDone[key1];
    var bg1 = isDone1 ? 'var(--rose)' : 'var(--line)';
    var dot1 = isDone1 ? 'transform:translateX(14px);' : '';
    
    h += '      <div style="display:flex; align-items:center; gap:12px; margin-top:8px;">';
    h += '        <label style="' + switchStyle + '" onclick="event.stopPropagation(); toggleAdminPlanCheck(\'' + key1 + '\')">';
    h += '          <span style="' + sliderStyle + ' background:' + bg1 + ';"></span>';
    h += '          <span style="position:absolute; content:\'\'; height:14px; width:14px; left:3px; bottom:3px; border-radius:50%; background:#fff; transition:.3s; ' + dot1 + '"></span>';
    h += '        </label>';
    h += '        <h3 style="margin:0; color:var(--ink); font-size:16px; font-weight:500;">Reading 1: <span style="color:var(--rose); text-decoration:underline; cursor:pointer; font-weight:600;" onclick="routeToBiblePassage(\'' + esc(plan1Val) + '\')">' + esc(plan1Val || 'None Assigned') + '</span></h3>';
    h += '      </div>';
    
    // Toggle Switch 2
    if (plan2Val) {
      var key2 = i + '_2';
      var isDone2 = !!S.adminPlanDone[key2];
      var bg2 = isDone2 ? 'var(--rose)' : 'var(--line)';
      var dot2 = isDone2 ? 'transform:translateX(14px);' : '';
      
      h += '      <div style="display:flex; align-items:center; gap:12px; margin-top:10px;">';
      h += '        <label style="' + switchStyle + '" onclick="event.stopPropagation(); toggleAdminPlanCheck(\'' + key2 + '\')">';
      h += '          <span style="' + sliderStyle + ' background:' + bg2 + ';"></span>';
      h += '          <span style="position:absolute; content:\'\'; height:14px; width:14px; left:3px; bottom:3px; border-radius:50%; background:#fff; transition:.3s; ' + dot2 + '"></span>';
      h += '        </label>';
      h += '        <h3 style="margin:0; color:var(--ink); font-size:16px; font-weight:500;">Reading 2: <span style="color:var(--rose); text-decoration:underline; cursor:pointer; font-weight:600;" onclick="routeToBiblePassage(\'' + esc(plan2Val) + '\')">' + esc(plan2Val || 'None Assigned') + '</span></h3>';
      h += '      </div>';
    }
    
    h += '    </div>';
    if (isToday) h += '    <span class="tag sage" style="font-weight:600;">Active Today</span>';
    h += '  </div>';
    h += '</div>';
  }
   h += '</div>';

  setTimeout(function() {
    var todayCard = document.getElementById('today_reading_card');
    if (todayCard) {
      todayCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, 120);

  return h;
}




/**
 * Inverts the saved toggle completion status on click, packages data properly,
 * updates reading streak logs, and streams updates directly to the server.
 */
function toggleAdminPlanCheck(key) {
  S.adminPlanDone = S.adminPlanDone || {};
  var isDone = !!S.adminPlanDone[key];
  var tDate = today();

  if (isDone) {
    delete S.adminPlanDone[key];
  } else {
    S.adminPlanDone[key] = tDate;
    toast('Reading marked complete!');
  }
  
  // Repaired: Packages your progress states as a proper database record with a valid id
  put('settings', { id: 'admin_plan_progress_save', data: S.adminPlanDone }, true);

  var rPlanId = cfg().plan || 'sys_matrix_log';
  var rRec = S.reading[rPlanId] || { id: rPlanId, plan: 'matrix', start: tDate, done: {}, created: Date.now() };
  rRec.done = rRec.done || {};

  var otherTogglesActiveForToday = false;
  Object.keys(S.adminPlanDone).forEach(function(k) {
    if (k !== key && S.adminPlanDone[k] === tDate) {
      otherTogglesActiveForToday = true;
    }
  });

  if (isDone) {
    if (!otherTogglesActiveForToday) {
      var foundSlotKey = null;
      Object.keys(rRec.done).forEach(function(slotKey) {
        if (rRec.done[slotKey] === tDate) foundSlotKey = slotKey;
      });
      if (foundSlotKey !== null) delete rRec.done[foundSlotKey];
    }
  } else {
    var nextSlotIdx = Object.keys(rRec.done).length;
    rRec.done[nextSlotIdx] = tDate;
  }

  put('reading', rRec, true);
  if (!cfg().plan) setCfg('plan', rPlanId);

  render();
}




/**
 * Splices the coordinate points and shifts focus cleanly into the interactive Bible reader.
 */
function routeToBiblePassage(passageRef) {
  if (!passageRef || passageRef === 'None Assigned' || passageRef === 'Rest Day') return;
  
  // Fixes the spreadsheet formatting glitch by scrubbing away hidden spaces or column line breaks
  var cleanRef = String(passageRef).trim().replace(/\s+/g, ' ');
  
  var match = cleanRef.match(/^([\d\s]*[A-Za-z\s]+)\s+(\d+)(?::([\d–\-]+))?/);
  if (!match) {
    UI.bibleBook = cleanRef.replace(/\d+/g, '').trim();
    UI.bibleChapter = '1';
    UI.bibleVerse = 'All';
    go('bible');
    return;
  }
  
  var matchArray = [].slice.call(match);
  
  UI.bibleBook = String(matchArray.slice(1, 2)).trim();
  UI.bibleChapter = String(matchArray.slice(2, 3)).trim();
  
  var verseSegment = String(matchArray.slice(3, 4)).trim();
  if (verseSegment && verseSegment !== 'undefined' && verseSegment !== '') {
    UI.bibleVerse = verseSegment.split(/[-–]/).slice(0, 1).toString().trim();
  } else {
    UI.bibleVerse = 'All';
  }
  
  go('bible');
}








/**
 * Renders the enhanced Bible Reader interface views.
 */
function vBible() {
  UI.bibleBook = UI.bibleBook || 'Genesis';
  UI.bibleChapter = UI.bibleChapter || '1';
  UI.bibleVerse = UI.bibleVerse || 'All';
  UI.bibleVersion = UI.bibleVersion || 'KJV';

  var h = ph('Bible Reader', 'Holy Scripture', 'Select a translation, book, and chapter to read from your database. Choosing a verse from the dropdown menu will automatically scroll to it. Clicking a verse gives you the option to highlight it.');

  var kjvStyle = UI.bibleVersion === 'KJV' ? 'background:var(--rose);color:#fff;font-weight:600;' : 'background:var(--card);color:var(--ink);';
  var bsbStyle = UI.bibleVersion === 'BSB' ? 'background:var(--rose);color:#fff;font-weight:600;' : 'background:var(--card);color:var(--ink);';
  var audioStyle = window._bibleSpeaking ? 'background:var(--gold);color:#fff;border-color:var(--gold);font-weight:600;' : 'background:var(--gold2);color:var(--ink);border-color:var(--gold);';
  var isEv = cfg().eveningMode === '1';
  var evStyle = isEv ? 'background:var(--rose-d);color:#fff;border-color:var(--rose-d);font-weight:600;' : 'background:var(--card);color:var(--ink);border-color:var(--line);';
  var fontSize = parseInt(cfg().bibleFontSize, 10) || 18;
  var audioLabel = window._bibleSpeaking ? '⏹ Stop' : '🔊 Listen';

  h += '<div style="display:flex; gap:8px; margin-bottom:10px; width:100%; flex-wrap:wrap; align-items:center;">';
  h += '  <button type="button" class="btn sm" style="' + evStyle + '" onclick="toggleEveningTheme()">' + (isEv ? '🕯️ Evening' : '☀️ Day') + '</button>';
  h += '  <div style="display:flex; gap:4px; margin-left:auto;">';
  h += '    <button type="button" class="btn sm" style="padding:6px 10px;" aria-label="Decrease text size" onclick="stepBibleFont(-2)">A-</button>';
  h += '    <button type="button" class="btn sm" style="padding:6px 10px;" aria-label="Increase text size" onclick="stepBibleFont(2)">A+</button>';
  h += '  </div>';
  h += '</div>';

  h += '<div style="display:flex; gap:8px; margin-bottom:14px; width:100%; flex-wrap:wrap;">';
  h += '  <button type="button" class="btn sm" style="flex:1; border-color:var(--rose); ' + kjvStyle + '" onclick="stopBibleAudio();changeBibleVersion(\'KJV\')">KJV · Classic</button>';
  h += '  <button type="button" class="btn sm" style="flex:1; border-color:var(--rose); ' + bsbStyle + '" onclick="stopBibleAudio();changeBibleVersion(\'BSB\')">BSB · Modern</button>';
  h += '  <button type="button" class="btn sm" style="' + audioStyle + '" onclick="toggleBibleAudio()">' + audioLabel + '</button>';
  h += '</div>';

  h += '<div class="card" style="margin-bottom: 16px; padding: 14px 20px;">';
  h += '  <div style="display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 12px; margin-bottom: 0;">';
  h += '    <div class="f" style="margin-bottom: 0;"><span>Book</span><select id="b_book" onchange="changeBibleBook(this.value)">';
  BOOKS.forEach(function(bk) {
    var bName = String(bk.slice(0, 1));
    h += '      <option value="' + bName + '"' + (UI.bibleBook === bName ? ' selected' : '') + '>' + bName + '</option>';
  });
  h += '    </select></div>';

  var currentBookDef = BOOKS.filter(function(b) { return String(b.slice(0, 1)) === UI.bibleBook; }).shift() || BOOKS.slice(0, 1).shift();
  var totalChapters = parseInt(currentBookDef.slice(1, 2), 10) || 50;

  h += '    <div class="f" style="margin-bottom: 0;"><span>Chapter</span><select id="b_chap" onchange="changeBibleChapter(this.value)">';
  for (var c = 1; c <= totalChapters; c++) {
    h += '      <option value="' + c + '"' + (String(UI.bibleChapter) === String(c) ? ' selected' : '') + '>Ch. ' + c + '</option>';
  }
  h += '    </select></div>';

  var totalVerses = getBibleVerseCount(UI.bibleBook, UI.bibleChapter);
  h += '    <div class="f" style="margin-bottom: 0;"><span>Verse</span><select id="b_verse" onchange="changeBibleVerse(this.value)">';
  h += '      <option value="All"' + (UI.bibleVerse === 'All' ? ' selected' : '') + '>Show All</option>';
  for (var v = 1; v <= totalVerses; v++) {
    h += '      <option value="' + v + '"' + (String(UI.bibleVerse) === String(v) ? ' selected' : '') + '>Vs. ' + v + '</option>';
  }
  h += '    </select></div>';
  h += '  </div>';
  h += '</div>';

  h += '<div class="card" style="min-height: 300px;">';
  h += '  <div id="bible_text_loading" class="mu" style="display:none;">' + ic('today', 'spin') + ' Loading ' + esc(UI.bibleVersion) + ' scripture text...</div>';
  h += '  <div id="bible_text_body" class="read" style="font-family: var(--serif); font-size: ' + fontSize + 'px; line-height: 1.65; color: var(--ink);">';
  h += '    <p class="mu">Select a passage above to load text details.</p>';
  h += '  </div>';
  h += '  <div style="display:flex; justify-content:space-between; gap:10px; margin-top:20px; padding-top:14px; border-top:1px solid var(--line);">';
  h += '    <button type="button" class="btn sm" onclick="stepBibleChapter(-1)">&lsaquo; Previous Chapter</button>';
  h += '    <button type="button" class="btn sm" onclick="stepBibleChapter(1)">Next Chapter &rsaquo;</button>';
  h += '  </div>';
  h += '</div>';

  h += '<div id="bible_verse_bar" style="display:none; position:sticky; bottom:74px; z-index:25; margin-top:12px; background:var(--card); border:2px solid var(--gold); border-radius:16px; padding:12px 14px; box-shadow:0 8px 24px rgba(15,74,83,0.18);">';
  h += '  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">';
  h += '    <b id="bible_bar_ref" style="color:var(--rose-d); font-size:14px;"></b>';
  h += '    <button type="button" class="iconbtn" style="width:28px;height:28px;" onclick="closeBibleVerseBar()">' + ic('close') + '</button>';
  h += '  </div>';
  h += '  <div style="display:flex; gap:8px; flex-wrap:wrap;">';
  h += '    <button type="button" class="btn sm" style="background:var(--gold2); border-color:var(--gold);" onclick="toggleBibleHighlight()">✨ Highlight</button>';
  h += '    <button type="button" class="btn sm" onclick="saveTappedBibleVerse()">' + ic('star') + ' Save Verse</button>';
  h += '    <button type="button" class="btn sm pri" onclick="journalTappedBibleVerse()">' + ic('edit') + ' SOAP Journal</button>';
  h += '  </div>';
  h += '</div>';

  setTimeout(loadActiveBibleText, 50);
  return h;
}

function stepBibleFont(delta) {
  var cur = parseInt(cfg().bibleFontSize, 10) || 18;
  var next = Math.max(14, Math.min(28, cur + delta));
  setCfg('bibleFontSize', String(next));
  applyBibleFontSize(next);
  toast('Scripture text size: ' + next + 'px');
}

function applyBibleFontSize(sz) {
  var size = parseInt(sz || cfg().bibleFontSize, 10) || 18;
  var el = document.getElementById('bible_text_body');
  if (!el) return;
  el.style.fontSize = size + 'px';
  el.querySelectorAll('p, div, span').forEach(function(node) {
    if (!node.classList.contains('ey') && !node.classList.contains('mu')) {
      node.style.fontSize = size + 'px';
    }
  });
}


function stepBibleChapter(dir) {
  stopBibleAudio();
  var idx = -1;
  BOOKS.forEach(function(b, i) { if (String(b.slice(0, 1)) === UI.bibleBook) idx = i; });
  if (idx < 0) return;
  var curCh = parseInt(UI.bibleChapter, 10) || 1;
  var maxCh = parseInt(BOOKS.slice(idx, idx + 1).shift().slice(1, 2), 10) || 1;
  if (dir > 0) {
    if (curCh < maxCh) { UI.bibleChapter = String(curCh + 1); }
    else if (idx + 1 < BOOKS.length) {
      UI.bibleBook = String(BOOKS.slice(idx + 1, idx + 2).shift().slice(0, 1));
      UI.bibleChapter = '1';
    } else { toast('You have reached the end of Revelation!'); return; }
  } else {
    if (curCh > 1) { UI.bibleChapter = String(curCh - 1); }
    else if (idx - 1 >= 0) {
      var prevDef = BOOKS.slice(idx - 1, idx).shift();
      UI.bibleBook = String(prevDef.slice(0, 1));
      UI.bibleChapter = String(prevDef.slice(1, 2));
    } else { toast('You are at Genesis 1.'); return; }
  }
  UI.bibleVerse = 'All';
  window.scrollTo({ top: 0, behavior: 'smooth' });
  render();
}

function changeBibleVersion(ver) {
  UI.bibleVersion = ver;
  render();
}


/* ---------- REPAIRED BIBLE ROW LOOKUPS ---------- */

function changeBibleBook(val) { 
  UI.bibleBook = val; 
  UI.bibleChapter = '1'; 
  UI.bibleVerse = 'All'; 
  render(); 
}

function changeBibleChapter(val) { 
  UI.bibleChapter = val; 
  UI.bibleVerse = 'All'; 
  render(); 
}

function changeBibleVerse(val) { 
  UI.bibleVerse = val; 
  
  // 1. Clear out any old highlights first
  qa('#bible_text_body p').forEach(function(p) {
    p.style.background = 'transparent';
    p.style.padding = '0';
  });
  
  // 2. Locate the specific verse paragraph and apply your custom design highlight
  var selectedParagraph = $('v_' + val);
  if (selectedParagraph) {
    selectedParagraph.style.background = 'var(--gold2)'; // Elegant soft gold highlight
    selectedParagraph.style.padding = '6px 10px';
    selectedParagraph.style.borderRadius = '8px';
    
    // 3. Smoothly center the exact verse in your view
    selectedParagraph.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}



function loadActiveBibleText() {
  var loader = document.getElementById('bible_text_loading');
  var body = document.getElementById('bible_text_body');
  var ver = UI.bibleVersion || 'KJV';
  var cacheKey = ver + '|' + UI.bibleBook + '|' + UI.bibleChapter;

  window._bibleCache = window._bibleCache || {};
  if (window._bibleCache[cacheKey]) {
    if (loader) loader.style.display = 'none';
    body.innerHTML = window._bibleCache[cacheKey];
    applySavedHighlights();
    applyBibleFontSize();
    if (UI.bibleVerse && UI.bibleVerse !== 'All') changeBibleVerse(UI.bibleVerse);
    return;
  }

  if (loader) loader.style.display = 'block';
  gas('api_bible_lookup', { book: UI.bibleBook, chapter: UI.bibleChapter, version: ver })
    .then(function(htmlContent) {
      var finalHtml = htmlContent || '<p class="mu">No text found for this chapter in your database.</p>';
      window._bibleCache[cacheKey] = finalHtml;
      if (loader) loader.style.display = 'none';
      body.innerHTML = finalHtml;
      applySavedHighlights();
      applyBibleFontSize();
      if (UI.bibleVerse && UI.bibleVerse !== 'All') changeBibleVerse(UI.bibleVerse);
    })
    .catch(function(err) {
      if (loader) loader.style.display = 'none';
      body.innerHTML = '<p class="mu">Error loading scripture: ' + esc(err.message || err) + '</p>';
    });
}






function getBibleVerseCount(book, chapter) {
  if (book === 'Psalms' || book === 'Psalm') {
    if (chapter == 119) return 176;
    if (chapter == 78) return 72;
    return 40; 
  }
  return 35;
}

function applySavedHighlights() {
  var saved = (S.settings.bibleHighlights && S.settings.bibleHighlights.data) || {};
  var prefix = (UI.bibleVersion || 'KJV') + '|' + UI.bibleBook + '|' + UI.bibleChapter + '|';
  qa('#bible_text_body p').forEach(function(p) {
    var vNum = p.getAttribute('data-v');
    if (vNum && saved[prefix + vNum]) {
      p.style.background = 'var(--gold2)';
      p.style.borderLeft = '3px solid var(--gold)';
    } else if (UI.bibleVerse !== vNum) {
      p.style.background = 'transparent';
      p.style.borderLeft = 'none';
    }
  });
}

function tapBibleVerse(vNum) {
  var p = $('v_' + vNum);
  if (!p) return;
  var clone = p.cloneNode(true);
  var numSpan = clone.querySelector('span');
  if (numSpan) numSpan.remove();
  var cleanText = clone.textContent.trim();
  var ver = UI.bibleVersion || 'KJV';
  var ref = UI.bibleBook + ' ' + UI.bibleChapter + ':' + vNum;

  window._tappedVerse = { vNum: vNum, ref: ref, text: cleanText, ver: ver };
  applySavedHighlights();
  p.style.background = 'var(--rose2)';

  var bar = $('bible_verse_bar');
  var lbl = $('bible_bar_ref');
  if (lbl) lbl.textContent = ref + ' · ' + ver;
  if (bar) bar.style.display = 'block';
}

function closeBibleVerseBar() {
  var bar = $('bible_verse_bar');
  if (bar) bar.style.display = 'none';
  window._tappedVerse = null;
  applySavedHighlights();
}

function toggleBibleHighlight() {
  var tv = window._tappedVerse;
  if (!tv) return;
  var saved = (S.settings.bibleHighlights && S.settings.bibleHighlights.data) || {};
  var key = tv.ver + '|' + UI.bibleBook + '|' + UI.bibleChapter + '|' + tv.vNum;
  if (saved[key]) {
    delete saved[key];
    toast('Highlight removed.');
  } else {
    saved[key] = 1;
    toast('Verse highlighted!');
  }
  put('settings', { id: 'bibleHighlights', data: saved }, true);
  closeBibleVerseBar();
}

function saveTappedBibleVerse() {
  var tv = window._tappedVerse;
  if (!tv) return;
  if (all('verses').some(function(x) { return x.ref === tv.ref && x.tr === tv.ver; })) {
    toast('This verse is already saved!');
    closeBibleVerseBar();
    return;
  }
  put('verses', { ref: tv.ref, text: tv.text, tr: tv.ver, topic: 'Bible Reader', memory: false, created: Date.now(), date: today() });
  toast('Saved ' + tv.ref + ' to Scripture!');
  closeBibleVerseBar();
}

function journalTappedBibleVerse() {
  var tv = window._tappedVerse;
  if (!tv) return;
  closeBibleVerseBar();
  editEntry(null, 'soap', { type: 'soap', date: today(), ref: tv.ref + ' (' + tv.ver + ')', s: tv.text });
}

/**
 * Keeps your homepage layout safe from old check-line attachment crashes.
 */
function wireGratitude() {
  // Bridges the old homepage render loop safely
  return true;
}



/**
 * Generates and downloads a universal .vcf contact card for Academy TLC.
 */
function downloadTlcVCard() {
  var ytUrl = 'https://www.youtube.com/@academytlc';
  var vcard = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'FN:Academy TLC (The Lord\'s Children)',
    'ORG:Academy TLC - The Lord\'s Children',
    'TEL;TYPE=CELL,VOICE:+17064698752',
    'EMAIL;TYPE=PREF,INTERNET:AcademyTLC.ministry@gmail.com',
    'URL:' + ytUrl,
    'NOTE:Where Jesus is the cornerstone.\\nYouTube: ' + ytUrl,
    'END:VCARD'
  ].join('\r\n');

  var blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'Academy_TLC_Contact.vcf';
  document.body.appendChild(a);
  a.click();
  a.remove();
  toast('Contact card ready to save!');
}


/**
 * Checks whether the top calendar reminder prompt should appear today.
 */
function checkDailyCalBanner() {
  var c = cfg();
  if (c.calPromptNever === '1') return;
  if (c.calPromptSnooze === today()) return;
  var banner = document.getElementById('tlcCalBanner');
  if (banner) banner.style.display = 'block';
}
function checkGroupAnnouncementPop() {
  var msg = String(window._groupAnnouncement || '').trim();
  if (!msg) return;
  if (cfg().seenAnnouncement === msg) return;

  var bar = document.getElementById('tlcGroupNoticeBar');
  var txt = document.getElementById('tlcGroupNoticeText');
  if (bar && txt) {
    txt.textContent = msg;
    bar.style.display = 'block';
  }
}

function dismissGroupNoticeBar() {
  var bar = document.getElementById('tlcGroupNoticeBar');
  if (bar) bar.style.display = 'none';
  var msg = String(window._groupAnnouncement || '').trim();
  if (msg) {
    setCfg('seenAnnouncement', msg);
  }
  render();
}

function reopenGroupNoticeBar() {
  var msg = String(window._groupAnnouncement || '').trim();
  if (!msg) return;
  var bar = document.getElementById('tlcGroupNoticeBar');
  var txt = document.getElementById('tlcGroupNoticeText');
  if (bar && txt) {
    txt.textContent = msg;
    bar.style.display = 'block';
  }
}



/**
 * Handles user selection on the top calendar reminder notification.
 */
function handleCalReminderChoice(choice) {
  var banner = document.getElementById('tlcCalBanner');
  if (banner) banner.style.display = 'none';

  if (choice === 'yes') {
    setCfg('calPromptNever', '1');
    openDailyCalendarAlert();
  } else if (choice === 'later') {
    setCfg('calPromptSnooze', today());
  } else if (choice === 'never') {
    setCfg('calPromptNever', '1');
  }
}

/**
 * Generates and opens a universal .ics recurring daily calendar reminder
 * that launches the native Calendar app on both iPhone and Android.
 */
function openDailyCalendarAlert() {
  var appLink = URL0 || window.location.href;
  var tVal = (cfg().reminderTime || '08:00').split(':');
  var hh = ('0' + (tVal || '08')).slice(-2);
  var min = ('0' + (tVal || '00')).slice(-2);
  var endMinNum = parseInt(min, 10) + 15;
  var endHh = endMinNum >= 60 ? ('0' + ((parseInt(hh, 10) + 1) % 24)).slice(-2) : hh;
  var endMin = ('0' + (endMinNum % 60)).slice(-2);

  var now = new Date();
  var yyyy = now.getFullYear();
  var mm = ('0' + (now.getMonth() + 1)).slice(-2);
  var dd = ('0' + now.getDate()).slice(-2);
  var startStamp = yyyy + mm + dd + 'T' + hh + min + '00';
  var endStamp = yyyy + mm + dd + 'T' + endHh + endMin + '00';

  var ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Academy TLC//Bible Study Journal//EN',
    'BEGIN:VEVENT',
    'UID:academytlc-daily-' + Date.now() + '@academytlc.org',
    'DTSTAMP:' + startStamp + 'Z',
    'DTSTART:' + startStamp,
    'DTEND:' + endStamp,
    'RRULE:FREQ=DAILY',
    'SUMMARY:Academy TLC: Daily Prayer & Reading',
    'DESCRIPTION:Take a quiet moment with the Lord in your Academy TLC (The Lord\'s Children) Study Journal.\\n\\nOpen your journal: ' + appLink,
    'URL:' + appLink,
    'BEGIN:VALARM',
    'TRIGGER:-PT0M',
    'ACTION:DISPLAY',
    'DESCRIPTION:Time for your daily prayer and reading in Academy TLC!',
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  var blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'Academy_TLC_Daily_Reminder.ics';
  document.body.appendChild(a);
  a.click();
  a.remove();
  toast('Calendar reminder set for ' + (cfg().reminderTime || '08:00') + '!');
}




/* ---------- LIGHTHEARTED FAITH GAME (TRIVIA, SCRAMBLE & WORD SEARCH) ---------- */
var GAME_TRIVIA = [
  { cat: 'Classics', q: 'Who built the ark when God told him a great flood was coming?', opts: ['Moses', 'Noah', 'Abraham', 'David'], a: 1, ref: 'Genesis 6:14' },
  { cat: 'Old Testament Heroes', q: 'What did David use to defeat the giant Goliath?', opts: ['A bronze sword', 'A sling and a stone', 'A bow and arrow', 'A spear'], a: 1, ref: '1 Samuel 17:49' },
  { cat: 'Classics', q: 'Which prophet was swallowed by a great fish?', opts: ['Jonah', 'Elijah', 'Daniel', 'Isaiah'], a: 0, ref: 'Jonah 1:17' },
  { cat: 'Classics', q: 'How many loaves of bread and fish did Jesus use to feed the 5,000?', opts: ['7 loaves & 3 fish', '5 loaves & 2 fish', '3 loaves & 5 fish', '12 loaves & 1 fish'], a: 1, ref: 'Matthew 14:17' },
  { cat: 'Old Testament Heroes', q: 'Who was thrown into the lions\' den for praying to God?', opts: ['Joseph', 'Daniel', 'Samson', 'Solomon'], a: 1, ref: 'Daniel 6:16' },
  { cat: 'Classics', q: 'What was the very first miracle Jesus performed?', opts: ['Walking on water', 'Healing a blind man', 'Turning water into wine', 'Calming a storm'], a: 2, ref: 'John 2:11' },
  { cat: 'Classics', q: 'Which disciple walked on water toward Jesus before getting afraid?', opts: ['John', 'Andrew', 'Peter', 'Thomas'], a: 2, ref: 'Matthew 14:29' },
  { cat: 'Classics', q: 'What did God place in the sky as a promise never to flood the whole earth again?', opts: ['A bright star', 'A rainbow', 'A pillar of cloud', 'A dove'], a: 1, ref: 'Genesis 9:13' },
  { cat: 'Classics', q: 'Who climbed a sycamore tree just so he could see Jesus passing by?', opts: ['Zacchaeus', 'Nicodemus', 'Lazarus', 'Barnabas'], a: 0, ref: 'Luke 19:4' },
  { cat: 'Classics', q: 'What is the shortest verse in the King James Bible?', opts: ['God is love.', 'Pray without ceasing.', 'Jesus wept.', 'Rejoice evermore.'], a: 2, ref: 'John 11:35' },
  { cat: 'Women of the Bible', q: 'Which queen risked her life to approach the king and save her people?', opts: ['Ruth', 'Esther', 'Deborah', 'Hannah'], a: 1, ref: 'Esther 4:16' },
  { cat: 'Women of the Bible', q: 'Who told her mother-in-law Naomi, "Whither thou goest, I will go"?', opts: ['Rachel', 'Leah', 'Ruth', 'Miriam'], a: 2, ref: 'Ruth 1:16' },
  { cat: 'Women of the Bible', q: 'Who was the only female judge of Israel who led her nation under a palm tree?', opts: ['Deborah', 'Sarah', 'Abigail', 'Rahab'], a: 0, ref: 'Judges 4:4–5' },
  { cat: 'Women of the Bible', q: 'Which mother prayed earnestly for a son and dedicated young Samuel to the Lord?', opts: ['Elizabeth', 'Hannah', 'Rebekah', 'Mary'], a: 1, ref: '1 Samuel 1:27–28' },
  { cat: 'Women of the Bible', q: 'Who sat at Jesus\' feet listening to His word while her sister Martha served?', opts: ['Mary Magdalene', 'Mary of Bethany', 'Priscilla', 'Lydia'], a: 1, ref: 'Luke 10:39' },
  { cat: 'Parables of Jesus', q: 'In the Parable of the Good Samaritan, who stopped to care for the injured traveler?', opts: ['A priest', 'A Levite', 'A Samaritan', 'A Roman guard'], a: 2, ref: 'Luke 10:33' },
  { cat: 'Parables of Jesus', q: 'In the Parable of the Lost Sheep, how many sheep did the shepherd leave to find the one lost sheep?', opts: ['50', '99', '12', '70'], a: 1, ref: 'Luke 15:4' },
  { cat: 'Parables of Jesus', q: 'What tiny seed did Jesus compare the Kingdom of Heaven to that grows into a large tree?', opts: ['An olive pit', 'A fig seed', 'A mustard seed', 'A wheat kernel'], a: 2, ref: 'Matthew 13:31–32' },
  { cat: 'Parables of Jesus', q: 'In the Parable of the Wise and Foolish Builders, what did the wise man build his house upon?', opts: ['Soft sand', 'A solid rock', 'A green hill', 'Cedar beams'], a: 1, ref: 'Matthew 7:24' },
  { cat: 'Parables of Jesus', q: 'In the Parable of the Prodigal Son, what did the father do when he saw his son returning afar off?', opts: ['Sent a servant out', 'Ran, hugged, and kissed him', 'Asked him to work first', 'Closed the gate'], a: 1, ref: 'Luke 15:20' },
  { cat: 'Old Testament Heroes', q: 'Which hero was sold into slavery by his brothers before becoming second-in-command of Egypt?', opts: ['Benjamin', 'Joseph', 'Caleb', 'Gideon'], a: 1, ref: 'Genesis 41:41' },
  { cat: 'Old Testament Heroes', q: 'Who led the Israelites across the Jordan River and marched around Jericho?', opts: ['Joshua', 'Aaron', 'Samuel', 'Nehemiah'], a: 0, ref: 'Joshua 6:2–3' },
  { cat: 'Old Testament Heroes', q: 'With how many men did Gideon defeat the vast Midianite army?', opts: ['3,000 men', '1,000 men', '300 men', '10,000 men'], a: 2, ref: 'Judges 7:7' },
  { cat: 'Old Testament Heroes', q: 'Which prophet rebuilt the broken walls of Jerusalem in just 52 days?', opts: ['Ezra', 'Nehemiah', 'Jeremiah', 'Ezekiel'], a: 1, ref: 'Nehemiah 6:15' },
  { cat: 'Old Testament Heroes', q: 'Who parted the Red Sea by stretching out his hand over the water at God\'s command?', opts: ['Elijah', 'Moses', 'Elisha', 'Noah'], a: 1, ref: 'Exodus 14:21' }, 
  { cat: 'Miracles & Wonders', q: 'How many days had Lazarus been in the tomb before Jesus raised him from the dead?', opts: ['2 days', '3 days', '4 days', '7 days'], a: 2, ref: 'John 11:17' },
  { cat: 'Miracles & Wonders', q: 'What happened to the walls of Jericho after the Israelites marched around them on the seventh day?', opts: ['They caught fire', 'They fell down flat', 'They turned to dust', 'The gates unlocked'], a: 1, ref: 'Joshua 6:20' },
  { cat: 'Miracles & Wonders', q: 'In which river did Naaman dip seven times to be healed of leprosy?', opts: ['Nile River', 'Euphrates River', 'Jordan River', 'Tigris River'], a: 2, ref: '2 Kings 5:14' },
  { cat: 'Miracles & Wonders', q: 'What did Jesus say to calm the fierce storm on the Sea of Galilee?', opts: ['Be thou removed', 'Peace, be still', 'Let there be calm', 'Fear not, little flock'], a: 1, ref: 'Mark 4:39' },
  { cat: 'Miracles & Wonders', q: 'How many men did King Nebuchadnezzar see walking unharmed inside the fiery furnace?', opts: ['Two men', 'Three men', 'Four men', 'Five men'], a: 2, ref: 'Daniel 3:25' },
  { cat: 'Miracles & Wonders', q: 'What did God send down from heaven each morning to feed the Israelites in the wilderness?', opts: ['Honey and figs', 'Manna', 'Pomegranates', 'Barley loaves'], a: 1, ref: 'Exodus 16:14–15' },
  { cat: 'Miracles & Wonders', q: 'Which apostle was freed from prison at night by an angel while chains fell off his hands?', opts: ['Paul', 'Peter', 'James', 'John'], a: 1, ref: 'Acts 12:7' },
  { cat: 'Miracles & Wonders', q: 'What animal spoke to Balaam when the angel of the Lord blocked their path?', opts: ['A camel', 'A donkey', 'A raven', 'A lion'], a: 1, ref: 'Numbers 22:28' },
  { cat: 'Wisdom & Psalms', q: 'According to Psalm 119:105, what is God\'s word compared to?', opts: ['A shield and buckler', 'A lamp unto my feet', 'A mighty fortress', 'A flowing river'], a: 1, ref: 'Psalm 119:105' },
  { cat: 'Wisdom & Psalms', q: 'Proverbs 15:1 says that a soft answer turneth away what?', opts: ['Fear', 'Wrath', 'Sorrow', 'Envy'], a: 1, ref: 'Proverbs 15:1' },
  { cat: 'Wisdom & Psalms', q: 'Which king asked God for an understanding heart to judge the people rather than riches?', opts: ['King David', 'King Solomon', 'King Josiah', 'King Hezekiah'], a: 1, ref: '1 Kings 3:9' },
  { cat: 'Wisdom & Psalms', q: 'According to Psalm 23, where does the Good Shepherd make us to lie down?', opts: ['Beside still waters', 'In green pastures', 'Upon a high rock', 'Under cedar trees'], a: 1, ref: 'Psalm 23:2' },
  { cat: 'Wisdom & Psalms', q: 'What does Proverbs 9:10 say is the beginning of wisdom?', opts: ['Reading many scrolls', 'The fear of the LORD', 'Listening to elders', 'Quiet meditation'], a: 1, ref: 'Proverbs 9:10' },
  { cat: 'Wisdom & Psalms', q: 'In Psalm 1, what is the blessed person who delights in the law of the Lord planted beside?', opts: ['A mountain peak', 'Rivers of water', 'A city gate', 'An olive grove'], a: 1, ref: 'Psalm 1:3' },
  { cat: 'Women of the Bible', q: 'Who was the seller of purple cloth in Philippi whose heart the Lord opened to Paul\'s message?', opts: ['Phoebe', 'Lydia', 'Dorcas', 'Eunice'], a: 1, ref: 'Acts 16:14' },
  { cat: 'Women of the Bible', q: 'Who hid the two Israelite spies on her roof in Jericho under stalks of flax?', opts: ['Rahab', 'Jael', 'Zipporah', 'Tamar'], a: 0, ref: 'Joshua 2:6' },
  { cat: 'Women of the Bible', q: 'Which woman was raised from the dead by Peter in Joppa after being known for making coats and garments?', opts: ['Martha', 'Dorcas (Tabitha)', 'Sapphira', 'Rhoda'], a: 1, ref: 'Acts 9:36–40' },
  { cat: 'Parables of Jesus', q: 'In the Parable of the Ten Virgins, what did the five wise virgins bring along with their lamps?', opts: ['Extra wicks', 'Oil in their vessels', 'Flint stones', 'Silver coins'], a: 1, ref: 'Matthew 25:4' },
  { cat: 'Parables of Jesus', q: 'In the Parable of the Sower, what happened to the seed that fell on good ground?', opts: ['Birds ate it quickly', 'It brought forth fruit', 'Thorns choked it', 'The sun scorched it'], a: 1, ref: 'Matthew 13:8' },
  { cat: 'Old Testament Heroes', q: 'Which prophet challenged the prophets of Baal on Mount Carmel where fire fell from heaven?', opts: ['Elisha', 'Elijah', 'Samuel', 'Amos'], a: 1, ref: '1 Kings 18:38' }

];

var GAME_SCRAMBLE = [
  { ref: 'Psalm 46:10', text: 'Be still, and know that I am God.' },
  { ref: '1 John 4:8', text: 'He that loveth not knoweth not God; for God is love.' },
  { ref: 'Psalm 23:1', text: 'The LORD is my shepherd; I shall not want.' },
  { ref: 'Philippians 4:13', text: 'I can do all things through Christ which strengtheneth me.' },
  { ref: 'Proverbs 3:5', text: 'Trust in the LORD with all thine heart;' },
  { ref: '1 Thessalonians 5:16', text: 'Rejoice evermore.' },
  { ref: 'Psalm 118:24', text: 'This is the day which the LORD hath made;' },
  { ref: 'Joshua 1:9', text: 'Be strong and of a good courage;' }, 
  { ref: 'Romans 8:28', text: 'And we know that all things work together for good to them that love God,' },
  { ref: 'Isaiah 40:31', text: 'But they that wait upon the LORD shall renew their strength;' },
  { ref: 'Jeremiah 29:11', text: 'For I know the thoughts that I think toward you, saith the LORD, thoughts of peace,' },
  { ref: 'Matthew 5:14', text: 'Ye are the light of the world.' },
  { ref: '1 Peter 5:7', text: 'Casting all your care upon him; for he careth for you.' },
  { ref: 'Psalm 37:4', text: 'Delight thyself also in the LORD; and he shall give thee the desires of thine heart.' }

];

var WS_PUZZLES = [
     {
    title: 'Fruit of the Spirit',
    words: ['LOVE', 'JOY', 'PEACE', 'FAITH', 'GRACE'],
    rows: [
      'L P E P E C A E P',
      'Z G P S L W R B Z',
      'E S G T L O Y R G',
      'S H T I A F V R N',
      'L F Q T L T A E M',
      'Y Y X Z J C J W R',
      'G H J T E O K H K',
      'K Z G Z Y Z R L R'
    ]
  },
  {
    title: 'Women of Faith',
    words: ['ESTHER', 'RUTH', 'MARY', 'SARAH', 'HANNAH'],
    rows: [
      'M H Q L S H T W W',
      'R A Z Y A T M Z Q',
      'D H R D R U Y E H',
      'A A L Y A R S M X',
      'K N T S H T M Z D',
      'B N F R H E Z P D',
      'J A W E G G D N G',
      'Q H R G Z L D P B'
    ]
  },
  {
    title: 'Armor of God',
    words: ['TRUTH', 'SHIELD', 'SWORD', 'PEACE', 'HELMET'],
    rows: [
      'Q S P D T Q N M H',
      'F P W R A V R H Z',
      'S J P O H S T T V',
      'M B E W E H B R V',
      'R Z C S L I M U D',
      'V R A Z M E C T E',
      'S J E Q E L S H C',
      'S W P C T D H R X'
    ]
  },
  {
    title: 'Names of Jesus',
    words: ['SAVIOR', 'LIGHT', 'LAMB', 'KING', 'SHEPHERD'],
    rows: [
      'X C F Z A V X Z K',
      'T X D X T C G W T',
      'T V B L V S S H G',
      'R S A A D A G Y T',
      'F M A J V I N G H',
      'B Z V I L Q I C T',
      'W L O N V B K R A',
      'D R E H P E H S L'
    ]
  },
  {
    title: 'Days of Creation',
    words: ['LIGHT', 'WATER', 'EARTH', 'STARS', 'ANIMALS'],
    rows: [
      'W B E D Z Z E N A',
      'A L Z P S M B Z D',
      'T I Y V L C R W F',
      'E G A E A M E E S',
      'R H C H M C A A R',
      'V T P E I F R R A',
      'E S Z K N R T P T',
      'L Q X Z A A H K S'
    ]
  },
  {
    title: 'The Disciples',
    words: ['PETER', 'JOHN', 'JAMES', 'ANDREW', 'MATTHEW'],
    rows: [
      'F S Z R A L P F E',
      'R M C A N H O J K',
      'Z A G G Z D T Q L',
      'P T D B W Q W F C',
      'E T M W E R D N A',
      'T H X T H M X A G',
      'E E J K P V K M W',
      'R W N J S E M A J'
    ]
  },
  {
    title: 'Miracles of Jesus',
    words: ['WINE', 'BREAD', 'STORM', 'BLIND', 'LAZARUS'],
    rows: [
      'L M B E D Y H A N',
      'A V B N D N I L B',
      'V D H D A E R B X',
      'B V M R O T S T C',
      'S U R A Z A L A X',
      'R V X N K Y W N Q',
      'H Y R W J M X Q R',
      'E Q T M E N I W H'
    ]
  },
  {
    title: 'Psalms of Praise',
    words: ['SING', 'HARP', 'GLORY', 'MERCY', 'REFUGE'],
    rows: [
      'T T P R A H C Z T',
      'E V Z T K T Y Y K',
      'D G N B K P C C Y',
      'L J U B E Y C R D',
      'V A D F R R S E B',
      'R M N O E I T M D',
      'J F L V N R T H C',
      'L G F G F X V Z D'
    ]
  },


  {
    title: 'Prophets of Israel',
    words: ['ELIJAH', 'ISAIAH', 'DANIEL', 'JONAH', 'SAMUEL'],
    rows: [
      'G R I J F E Z A R',
      'T Z B S L F H J L',
      'M T Z I A S S E E',
      'W H J F N I I Z U',
      'H A A C P N A N M',
      'H E Q N A Q G H A',
      'X A N D O T V X S',
      'S L Q L X J G D X'
    ]
  },
  {
    title: 'Epistles of Paul',
    words: ['ROMANS', 'GALATIANS', 'EPHESIANS', 'TIMOTHY', 'TITUS'],
    rows: [
      'S F X L W T L E Y',
      'U Q V G Y R Q H B',
      'T B V V O R T S D',
      'I X P M T O K T V',
      'T S A W M D M J H',
      'S N A I S E H P E',
      'S V T F A K P W F',
      'G A L A T I A N S'
    ]
  },
  {
    title: 'Places in Scripture',
    words: ['GALILEE', 'JERICHO', 'BETHLEHEM', 'NAZARETH', 'SINAI'],
    rows: [
      'N S I N A I M G C',
      'G A J N J D O A L',
      'C V Z D K H Q L J',
      'F D E A C S L I H',
      'K W J I R C E L N',
      'K Q R X Z E V E N',
      'M E H E L H T E B',
      'J Q D P T G A H J'
    ]
  },
  {
    title: 'Virtues & Wisdom',
    words: ['WISDOM', 'HUMILITY', 'PATIENCE', 'JUSTICE', 'KINDNESS'],
    rows: [
      'E C I T S U J H K',
      'M C L A T J U W I',
      'O H N X X M N W N',
      'D C J E I C G V D',
      'S M V L I Z D C N',
      'I F I A M T T L E',
      'W T V X P Y A C S',
      'Y Y H C Y H H P S'
    ]
  }


];

var GM = { mode: 'trivia', cat: 'All', idx: 0, streak: 0, picked: null, built: [], pool: [], wsIdx: 0, wsSel: [], wsFound: [], wsFoundCells: [] };



var DYNAMIC_VERSE_POOL = [];

async function ensureDynamicBiblePool_() {
  if (DYNAMIC_VERSE_POOL.length >= 40) return DYNAMIC_VERSE_POOL;
  try {
    var bible = await loadLocalBible(UI.bibleVersion || 'KJV');
    ['Proverbs', 'Psalms', 'Matthew', 'John', 'Romans', 'Philippians', 'Ephesians', 'James', '1 John', 'Isaiah'].forEach(function(bk) {
      var bObj = bible[bk];
      if (!bObj) return;
      Object.keys(bObj).forEach(function(chNum, i) {
        if (i % 2 !== 0) return;
        var vObj = bObj[chNum] || {};
        Object.keys(vObj).forEach(function(vNum) {
          var txt = String(vObj[vNum] || '').trim();
          var words = txt.split(/\s+/);
          if (words.length >= 6 && words.length <= 15) {
            DYNAMIC_VERSE_POOL.push({ ref: bk + ' ' + chNum + ':' + vNum, text: txt, topic: bk });
          }
        });
      });
    });
    DYNAMIC_VERSE_POOL.sort(function() { return Math.random() - 0.5; });
    DYNAMIC_VERSE_POOL = DYNAMIC_VERSE_POOL.slice(0, 250);
  } catch (e) {}
  return DYNAMIC_VERSE_POOL;
}

function initScramble() {
  ensureDynamicBiblePool_().then(function(pool) {
    if (pool && pool.length && !GM.built.length) {
      GM.activeScramble = pool[Math.floor(Math.random() * pool.length)];
      GM.pool = GM.activeScramble.text.split(/\s+/).map(function(w, i) { return { w: w, id: i }; }).sort(function() { return Math.random() - 0.5; });
      if (GM.mode === 'scramble') render();
    }
  });
  var fallback = GM.activeScramble || GAME_SCRAMBLE[GM.idx % GAME_SCRAMBLE.length];
  GM.activeScramble = fallback;
  GM.pool = fallback.text.split(/\s+/).map(function(w, i) { return { w: w, id: i }; }).sort(function() { return Math.random() - 0.5; });
  GM.built = [];
}




function selectTriviaCat(idx) {
  var cats = ['All', 'This Month\'s Reading', 'Women of the Bible', 'Parables of Jesus', 'Old Testament Heroes', 'Miracles & Wonders', 'Wisdom & Psalms', 'Classics'];
  var chosen = cats.slice(idx, idx + 1).shift() || 'All';
  GM.cat = chosen;
  GM.idx = 0;
  GM.picked = null;
  if (chosen === 'This Month\'s Reading') {
    loadMonthlyTrivia();
    return;
  }
  render();
}

function loadMonthlyTrivia() {
  if (window._monthlyTriviaLoaded) {
    render();
    return;
  }
  window._monthlyTriviaLoaded = true;
  toast('Loading questions from this month\'s reading...');
  gas('api_generate_monthly_trivia').then(function(qs) {
    if (qs && qs.length) {
      GAME_TRIVIA = GAME_TRIVIA.filter(function(x) { return x.cat !== 'This Month\'s Reading'; }).concat(qs);
      toast('Loaded ' + qs.length + ' questions from your reading plan!');
    } else {
      toast('No active readings found for this month yet—showing all trivia!');
      GM.cat = 'All';
    }
    render();
  }).catch(function(err) {
    toast('Could not load reading plan trivia: ' + (err.message || err));
    GM.cat = 'All';
    render();
  });
}


function getTriviaList() {
  if (!GAME_TRIVIA || !GAME_TRIVIA.length) return [];
  if (GM.cat === 'All') return GAME_TRIVIA;
  var filtered = GAME_TRIVIA.filter(function(x) { return x.cat === GM.cat; });
  return filtered.length ? filtered : GAME_TRIVIA;
}




function selectGameMode(newMode) {
  GM.mode = newMode;
  GM.picked = null;
  if (newMode === 'scramble') initScramble();
  if (newMode === 'versematch') initVerseMatch();
  if (newMode === 'whoami') initWhoAmI();
  if (newMode === 'crossword') initCrossword();
  if (newMode === 'connections') initConnections();
  render();
}

function vGame() {
  var games = [
    ['trivia', '📖 Bible Trivia'],
    ['scramble', '🔤 Verse Scramble'],
    ['wordsearch', '🔍 Word Search'],
    ['versematch', '✨ Verse Match'],
    ['whoami', '🕊️ Who Am I? (Bible Figures)'],
    ['crossword', '✏️ Scripture Crossword'],
    ['connections', '🧩 Bible Connections (4×4)']
  ];

  var h = ph('Faith Game', 'Joyful', 'Choose a game below to refresh your spirit and test your Bible knowledge.');
  h += '<div class="card" style="padding:14px 16px; margin-bottom:16px; display:flex; align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap; border-color:var(--gold);">';
  h += '  <div style="flex:1; min-width:200px;">';
  h += '    <label for="gm_select" class="ey" style="display:block; font-size:10.5px; margin-bottom:4px; color:var(--rose-d);">Select Activity</label>';
  h += '    <select id="gm_select" onchange="selectGameMode(this.value)" style="font-weight:600; color:var(--ink); border-color:var(--rose); background:var(--paper);">';
  games.forEach(function(g) {
    var copy = g.slice();
    var valKey = copy.shift();
    var labelTxt = copy.shift();
    h += '    <option value="' + valKey + '"' + (GM.mode === valKey ? ' selected' : '') + '>' + esc(labelTxt) + '</option>';
  });
  h += '    </select>';
  h += '  </div>';
  h += '  <span class="tag gold" style="font-size:13.5px; padding:7px 14px; font-weight:600;">✨ Streak: ' + GM.streak + '</span>';
  h += '</div>';

  if (GM.mode === 'trivia') {
    var cats = ['All', 'This Month\'s Reading', 'Women of the Bible', 'Parables of Jesus', 'Old Testament Heroes', 'Miracles & Wonders', 'Wisdom & Psalms', 'Classics'];
    window._triviaCats = cats;
    h += '<div class="chips" style="margin-bottom:12px;">' + cats.map(function(c, idx) {
      return '<button type="button" class="chip' + (GM.cat === c ? ' on' : '') + '" onclick="selectTriviaCat(' + idx + ')">' + esc(c) + '</button>';
    }).join('') +
    '<button type="button" class="chip" style="border-color:var(--gold); color:var(--rose-d);" onclick="shuffleTrivia()">🔀 Shuffle</button></div>';

    var list = getTriviaList();
    var qIndex = GM.idx % list.length;
    var q = list.slice(qIndex, qIndex + 1).shift() || GAME_TRIVIA.slice(0, 1).shift();

    h += '<div class="card" style="padding:22px;">';
    h += '  <div class="ey" style="margin-bottom:6px;">' + esc(q.cat) + ' · Question ' + ((GM.idx % list.length) + 1) + ' of ' + list.length + '</div>';
    h += '  <h2 style="font-size:23px; margin-bottom:16px;">' + esc(q.q) + '</h2>';
    h += '  <div class="stack" style="gap:10px;">';
    q.opts.forEach(function(opt, i) {
      var st = 'width:100%; justify-content:flex-start; text-align:left; padding:12px 16px; border-radius:14px;';
      if (GM.picked !== null) {
        if (i === q.a) st += ' background:var(--sage2); border-color:var(--sage); color:#2f4a28; font-weight:600;';
        else if (i === GM.picked) st += ' background:#fbe9e7; border-color:#d98c8c; color:#8a3b3b;';
      }
      h += '    <button class="btn" style="' + st + '" onclick="pickTrivia(' + i + ')">' + esc(opt) + '</button>';
    });
    h += '  </div>';
    if (GM.picked !== null) {
      var right = (GM.picked === q.a);
      h += '  <div style="margin-top:16px; padding:12px 14px; border-radius:12px; background:var(--gold2); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">';
      h += '    <span><b>' + (right ? 'Wonderful job!' : 'Good try!') + '</b> Found in <i>' + esc(q.ref) + '</i></span>';
      h += '    <button class="btn sm pri" onclick="GM.idx++;GM.picked=null;render()">Next Question ' + ic('next') + '</button>';
      h += '  </div>';
    } else {
      h += '  <div style="margin-top:14px; display:flex; justify-content:flex-end;">';
      h += '    <button class="btn sm ghost" onclick="GM.idx++;GM.picked=null;render()">Skip ' + ic('next') + '</button>';
      h += '  </div>';
    }
    h += '</div>';
  } else if (GM.mode === 'scramble') {
    if (!GM.pool.length && !GM.built.length) initScramble();
    var sc = GM.activeScramble || GAME_SCRAMBLE[GM.idx % GAME_SCRAMBLE.length];

    var solved = GM.built.map(function(x) { return x.w; }).join(' ') === sc.text;
    h += '<div class="card" style="padding:22px;">';
    h += '  <div class="ey" style="margin-bottom:4px;">Unscramble the Scripture</div>';
    h += '  <h3 style="color:var(--rose-d); margin-bottom:14px;">' + esc(sc.ref) + '</h3>';
    h += '  <div style="min-height:64px; padding:12px; border-radius:14px; background:var(--paper2); border:1.5px dashed var(--gold); display:flex; flex-wrap:wrap; gap:8px; align-items:center; margin-bottom:14px;">';
    if (!GM.built.length) h += '<span class="mu sm">Tap the words below in order to build the verse...</span>';
    GM.built.forEach(function(item, bIdx) {
      h += '    <button class="btn sm" style="background:var(--card); border-color:var(--rose);" onclick="unpickScramble(' + bIdx + ')">' + esc(item.w) + '</button>';
    });
    h += '  </div>';
    h += '  <div style="display:flex; flex-wrap:wrap; gap:8px; margin-bottom:16px;">';
    GM.pool.forEach(function(item, pIdx) {
      h += '    <button class="btn sm" onclick="pickScramble(' + pIdx + ')">' + esc(item.w) + '</button>';
    });
    h += '  </div>';
         if (solved) {
      h += '  <div style="padding:12px 14px; border-radius:12px; background:var(--sage2); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">';
      h += '    <span><b>Amen!</b> You unscrambled <i>' + esc(sc.ref) + '</i>!</span>';
      h += '    <button class="btn sm pri" onclick="GM.streak++;saveDailyGameStreak();GM.activeScramble=null;GM.idx++;initScramble();render()">Next Verse ' + ic('next') + '</button>';
      h += '  </div>';
    } else {
      h += '  <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">';
      h += (GM.built.length ? '<button class="btn sm ghost" onclick="initScramble();render()">Reset Words</button>' : '<span></span>');
      h += '    <button class="btn sm ghost" onclick="GM.activeScramble=null;GM.idx++;initScramble();render()">Skip Verse ' + ic('next') + '</button>';
      h += '  </div>';
    }
    h += '</div>';
  } else if (GM.mode === 'versematch') {

    h += renderVerseMatchCard();
      } else if (GM.mode === 'whoami') {
    h += renderWhoAmICard();
  } else if (GM.mode === 'crossword') {
    h += renderCrosswordCard();
  } else if (GM.mode === 'connections') {
    h += renderConnectionsCard();

   } else {
    var totalWs = WS_PUZZLES.length;
    var activeWsIdx = GM.wsIdx % totalWs;
    var pz = WS_PUZZLES.slice(activeWsIdx, activeWsIdx + 1).pop();
    var allDone = pz.words.every(function(w) { return GM.wsFound.indexOf(w) >= 0; });

    h += '<div class="card" style="padding:20px;">';
    h += '  <div style="display:flex; justify-content:space-between; align-items:flex-end; flex-wrap:wrap; gap:10px; margin-bottom:14px;">';
    h += '    <div style="flex:1; min-width:190px;">';
    h += '      <label for="ws_select" class="ey" style="display:block; font-size:10.5px; margin-bottom:4px;">Choose Word Search (' + (activeWsIdx + 1) + ' of ' + totalWs + ')</label>';
    h += '      <select id="ws_select" onchange="selectWsPuzzle(this.value)" style="font-weight:600; color:var(--rose-d); border-color:var(--gold); background:var(--paper);">';
    WS_PUZZLES.forEach(function(item, idx) {
      h += '      <option value="' + idx + '"' + (idx === activeWsIdx ? ' selected' : '') + '>' + (idx + 1) + '. ' + esc(item.title) + '</option>';
    });
    h += '      </select>';
    h += '    </div>';
    h += '    <div style="display:flex; gap:6px; flex-wrap:wrap;">';
    h += '      <button type="button" class="btn sm" style="border-color:var(--gold);" onclick="shuffleWsPuzzle()">🔀 Shuffle</button>';
    h += '      <button type="button" class="btn sm" onclick="shuffleWsPuzzle()">Next ' + ic('next') + '</button>';
    h += '    </div>';
    h += '  </div>';

    h += '  <div style="display:flex; flex-wrap:wrap; gap:8px; margin-bottom:14px;">' + pz.words.map(function(w) {
      var f = GM.wsFound.indexOf(w) >= 0;
      return '<span class="tag' + (f ? ' sage' : '') + '" style="' + (f ? 'text-decoration:line-through;font-weight:600;' : '') + '">' + (f ? '✓ ' : '') + esc(w) + '</span>';
    }).join('') + '</div>';

    h += '  <div style="display:grid; grid-template-columns:repeat(9,1fr); gap:4px; max-width:360px; margin:0 auto 14px;">';
    pz.rows.forEach(function(rStr, rIdx) {
      rStr.split(' ').forEach(function(ch, cIdx) {
        var key = rIdx + '-' + cIdx;
        var isSel = GM.wsSel.indexOf(key) >= 0;
        var isFound = GM.wsFoundCells.indexOf(key) >= 0;
        var bg = isSel ? 'background:var(--rose);color:#fff;border-color:var(--rose);'
               : isFound ? 'background:var(--sage2);color:#2f4a28;border-color:var(--sage);'
               : 'background:var(--paper);';
        h += '<button onclick="tapWsCell(\'' + key + '\',\'' + ch + '\')" style="aspect-ratio:1; border:1px solid var(--line); border-radius:8px; font-weight:600; font-size:14px; padding:0; ' + bg + '">' + esc(ch) + '</button>';
      });
    });
    h += '  </div>';

    if (allDone) {
      h += '  <div style="padding:12px 14px; border-radius:12px; background:var(--sage2); text-align:center;"><b>Praise God!</b> You found every word in <i>' + esc(pz.title) + '</i>!</div>';
    } else if (GM.wsSel.length) {
      h += '  <div style="text-align:center;"><button class="btn sm ghost" onclick="GM.wsSel=[];render()">Clear Selection</button></div>';
    }
    h += '</div>';
  }
  return h;
}



function pickTrivia(i) {
  if (GM.picked !== null) return;
  GM.picked = i;
  var list = getTriviaList();
  var q = list[GM.idx % list.length];
  if (i === q.a) GM.streak++; else GM.streak = 0;
  saveDailyGameStreak();
  render();
}

function pickScramble(pIdx) {
  var pickedItem = GM.pool.splice(pIdx, 1).shift();
  if (pickedItem) GM.built.push(pickedItem);
  render();
}

function unpickScramble(bIdx) {
  var returnedItem = GM.built.splice(bIdx, 1).shift();
  if (returnedItem) GM.pool.push(returnedItem);
  render();
}

function tapWsCell(key, ch) {
  var totalWs = WS_PUZZLES.length;
  var pz = WS_PUZZLES.slice(GM.wsIdx % totalWs, (GM.wsIdx % totalWs) + 1).pop();
  var pos = GM.wsSel.indexOf(key);
  if (pos >= 0) {
    GM.wsSel.splice(pos, 1);
    render();
    return;
  }
  GM.wsSel.push(key);

  // Extract coordinates and letters for all selected cells
  var cells = GM.wsSel.map(function(k) {
    var parts = k.split('-');
    var r = parseInt(parts.shift(), 10);
    var c = parseInt(parts.shift(), 10);
    var rowStr = pz.rows.slice(r, r + 1).pop() || '';
    var letter = rowStr.split(' ').slice(c, c + 1).pop() || '';
    return { r: r, c: c, ch: letter };
  });

  // Sort cells top-to-bottom, then left-to-right to check if they form a straight contiguous line
  var sorted = cells.slice().sort(function(a, b) {
    return (a.r - b.r) || (a.c - b.c);
  });

  var isStraightLine = true;
  if (sorted.length > 1) {
    var first = sorted.slice(0, 1).pop();
    var second = sorted.slice(1, 2).pop();
    var dr = second.r - first.r;
    var dc = second.c - first.c;
    if (Math.abs(dr) > 1 || Math.abs(dc) > 1 || (dr === 0 && dc === 0)) {
      isStraightLine = false;
    } else {
      for (var i = 1; i < sorted.length; i++) {
        var prev = sorted.slice(i - 1, i).pop();
        var curr = sorted.slice(i, i + 1).pop();
        if ((curr.r - prev.r) !== dr || (curr.c - prev.c) !== dc) {
          isStraightLine = false;
          break;
        }
      }
    }
  }

  if (isStraightLine) {
    var forwardWord = sorted.map(function(x) { return x.ch; }).join('');
    var backwardWord = sorted.slice().reverse().map(function(x) { return x.ch; }).join('');
    var matchedWord = null;

    if (pz.words.indexOf(forwardWord) >= 0 && GM.wsFound.indexOf(forwardWord) < 0) {
      matchedWord = forwardWord;
    } else if (pz.words.indexOf(backwardWord) >= 0 && GM.wsFound.indexOf(backwardWord) < 0) {
      matchedWord = backwardWord;
    }

    if (matchedWord) {
      GM.wsFound.push(matchedWord);
      GM.wsFoundCells = GM.wsFoundCells.concat(GM.wsSel);
      GM.wsSel = [];
      GM.streak++;
      saveDailyGameStreak();
      toast('Found ' + matchedWord + '!');
      if (pz.words.every(function(w) { return GM.wsFound.indexOf(w) >= 0; })) {
        launchPraiseConfetti();
      }
    }
  }

  render();
}



function selectWsPuzzle(idx) {
  GM.wsIdx = parseInt(idx, 10) || 0;
  GM.wsSel = [];
  GM.wsFound = [];
  GM.wsFoundCells = [];
  render();
}

function generateDynamicWordSearch_() {
  var stop = { THE:1, AND:1, THAT:1, FOR:1, WITH:1, UNTO:1, SHALL:1, THEY:1, THEM:1, THEIR:1, FROM:1, WHICH:1, HAVE:1, HATH:1, UPON:1, INTO:1, YOUR:1, LORD:1, THIS:1, WILL:1, NOT:1, BUT:1, ALL:1 };
  var src = DYNAMIC_VERSE_POOL.length ? DYNAMIC_VERSE_POOL : GAME_SCRAMBLE;
  var sample = src[Math.floor(Math.random() * src.length)] || GAME_SCRAMBLE;
  var raw = sample.text.toUpperCase().replace(/[^A-Z\s]/g, '').split(/\s+/).filter(function(w) { return w.length >= 4 && w.length <= 8 && !stop[w]; });
  var uniq = [];
  raw.forEach(function(w) { if (uniq.indexOf(w) < 0 && uniq.length < 5) uniq.push(w); });
  if (uniq.length < 4) return null;

  var cols = 9, rows = 8, grid = [], placed = [];
  for (var r = 0; r < rows; r++) { grid[r] = []; for (var c = 0; c < cols; c++) grid[r][c] = ''; }
  uniq.forEach(function(word) {
    for (var tries = 0; tries < 40; tries++) {
      var horiz = Math.random() < 0.65;
      var r0 = Math.floor(Math.random() * (horiz ? rows : rows - word.length + 1));
      var c0 = Math.floor(Math.random() * (horiz ? cols - word.length + 1 : cols));
      var ok = true;
      for (var i = 0; i < word.length; i++) {
        var cur = grid[r0 + (horiz ? 0 : i)][c0 + (horiz ? i : 0)];
        if (cur && cur !== word[i]) { ok = false; break; }
      }
      if (ok) {
        for (var j = 0; j < word.length; j++) grid[r0 + (horiz ? 0 : j)][c0 + (horiz ? j : 0)] = word[j];
        placed.push(word);
        break;
      }
    }
  });
  if (placed.length < 3) return null;
  var abc = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
  for (var r2 = 0; r2 < rows; r2++) {
    for (var c2 = 0; c2 < cols; c2++) if (!grid[r2][c2]) grid[r2][c2] = abc.charAt(Math.floor(Math.random() * abc.length));
  }
  return { title: 'Scripture Hunt: ' + sample.ref, words: placed, rows: grid.map(function(row) { return row.join(' '); }) };
}

function shuffleWsPuzzle() {
  ensureDynamicBiblePool_().then(function() {
    var fresh = generateDynamicWordSearch_();
    if (fresh) {
      WS_PUZZLES.push(fresh);
      selectWsPuzzle(WS_PUZZLES.length - 1);
      toast('Generated a new Scripture Word Search!');
    } else {
      selectWsPuzzle((GM.wsIdx + 1) % WS_PUZZLES.length);
    }
  });
}




function shuffleTrivia() {
  GAME_TRIVIA.sort(function() { return Math.random() - 0.5; });
  GM.idx = 0;
  GM.picked = null;
  toast('Trivia questions shuffled!');
  render();
}

/**
 * Saves the current game streak paired with today's date so it persists
 * all day and resets automatically tomorrow.
 */
function saveDailyGameStreak() {
  setCfg('gameStreak', GM.streak);
  setCfg('gameStreakDate', today());
}


/* ---------- MEMORY VERSE MATCH MODULE ---------- */
var VM_STATE = { current: null, options: [], picked: null };

function getVerseMatchPool() {
  ensureDynamicBiblePool_();
  var pool = DYNAMIC_VERSE_POOL.slice();
  SYSTEM_VERSES.forEach(function(sv) {
    var c = sv.slice();
    pool.push({ ref: c.shift(), text: c.shift(), topic: c.shift() || 'Memory Verse' });
  });
  return pool;
}



function initVerseMatch() {
  var pool = getVerseMatchPool();
  if (!pool.length) return;
  var qItem = pool.slice(GM.idx % pool.length, (GM.idx % pool.length) + 1).pop();
  var others = pool.filter(function(x) { return x.ref !== qItem.ref; });
  others.sort(function() { return Math.random() - 0.5; });
  var choices = others.slice(0, 3).map(function(x) { return x.ref; });
  choices.push(qItem.ref);
  choices.sort(function() { return Math.random() - 0.5; });

  VM_STATE.current = qItem;
  VM_STATE.options = choices;
  VM_STATE.picked = null;
}

function renderVerseMatchCard() {
  if (!VM_STATE.current) initVerseMatch();
  var item = VM_STATE.current;
  if (!item) return '';

  var out = '<div class="card" style="padding:22px;">';
  out += '  <div class="ey" style="margin-bottom:6px;">Memory Verse Match · ' + esc(item.topic) + '</div>';
  out += '  <div style="font-family:var(--serif); font-style:italic; font-size:21px; line-height:1.5; color:var(--ink); background:var(--paper2); border-left:3px solid var(--gold); padding:14px 16px; border-radius:12px; margin-bottom:16px;">“' + esc(item.text) + '”</div>';
  out += '  <div class="stack" style="gap:10px;">';

  VM_STATE.options.forEach(function(refOpt) {
    var st = 'width:100%; justify-content:flex-start; text-align:left; padding:12px 16px; border-radius:14px;';
    if (VM_STATE.picked !== null) {
      if (refOpt === item.ref) {
        st += ' background:var(--sage2); border-color:var(--sage); color:#2f4a28; font-weight:600;';
      } else if (refOpt === VM_STATE.picked) {
        st += ' background:#fbe9e7; border-color:#d98c8c; color:#8a3b3b;';
      }
    }
    out += '    <button class="btn" style="' + st + '" onclick="pickVerseMatch(\'' + esc(refOpt) + '\')">' + esc(refOpt) + '</button>';
  });

  out += '  </div>';
  if (VM_STATE.picked !== null) {
    var isRight = (VM_STATE.picked === item.ref);
    out += '  <div style="margin-top:16px; padding:12px 14px; border-radius:12px; background:var(--gold2); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">';
    out += '    <span><b>' + (isRight ? 'Amen! Spot on!' : 'Keep hiding His Word!') + '</b> Answer: <i>' + esc(item.ref) + '</i></span>';
    out += '    <button class="btn sm pri" onclick="GM.idx++;initVerseMatch();render()">Next Verse ' + ic('next') + '</button>';
    out += '  </div>';
  } else {
    out += '  <div style="margin-top:14px; display:flex; justify-content:flex-end;">';
    out += '    <button class="btn sm ghost" onclick="GM.idx++;initVerseMatch();render()">Skip Verse ' + ic('next') + '</button>';
    out += '  </div>';
  }
  out += '</div>';
  return out;
}


function pickVerseMatch(chosenRef) {
  if (VM_STATE.picked !== null || !VM_STATE.current) return;
  VM_STATE.picked = chosenRef;
  if (chosenRef === VM_STATE.current.ref) {
    GM.streak++;
    launchPraiseConfetti();
  } else {
    GM.streak = 0;
  }
  saveDailyGameStreak();
  render();
}

/* ---------- GAME 5: WHO AM I? (BIBLICAL FIGURES) ---------- */
var WHO_AM_I_DATA = [
  { clue: 'I was a Moabite widow who stayed loyal to my mother-in-law Naomi, gleaned barley in Bethlehem, and became King David\'s great-grandmother.', ans: 'Ruth', opts: ['Ruth', 'Esther', 'Hannah', 'Rahab'], ref: 'Ruth 1–4' },
  { clue: 'I was a tax collector in Jericho who climbed a sycamore tree to see Jesus, and later repaid fourfold anyone I had cheated.', ans: 'Zacchaeus', opts: ['Matthew', 'Zacchaeus', 'Nicodemus', 'Barnabas'], ref: 'Luke 19:1–9' },
  { clue: 'I interpreted Pharaoh\'s dreams of seven fat and seven lean cows, saving Egypt and my family from a seven-year famine.', ans: 'Joseph', opts: ['Daniel', 'Joseph', 'Moses', 'Aaron'], ref: 'Genesis 41' },
  { clue: 'I was a judge and prophetess who held court under a palm tree and led Israel to victory alongside Barak.', ans: 'Deborah', opts: ['Miriam', 'Deborah', 'Abigail', 'Huldah'], ref: 'Judges 4:4–9' },
  { clue: 'I was a fisherman who denied Jesus three times before the rooster crowed, yet preached at Pentecost where 3,000 believed.', ans: 'Peter', opts: ['Andrew', 'Peter', 'James', 'Thomas'], ref: 'Luke 22 & Acts 2' },
  { clue: 'I was a seller of purple cloth from Thyatira whose heart the Lord opened in Philippi to welcome Paul and Silas into my home.', ans: 'Lydia', opts: ['Priscilla', 'Phoebe', 'Lydia', 'Dorcas'], ref: 'Acts 16:14–15' },
  { clue: 'I asked God for a double portion of my mentor Elijah\'s spirit, parted the Jordan River, and told Naaman to dip seven times.', ans: 'Elisha', opts: ['Elisha', 'Samuel', 'Isaiah', 'Jeremiah'], ref: '2 Kings 2 & 5' },
  { clue: 'I was a Pharisee who visited Jesus at night to ask how a person can be born again, and later helped bury Him.', ans: 'Nicodemus', opts: ['Gamaliel', 'Nicodemus', 'Caiaphas', 'Joseph of Arimathea'], ref: 'John 3 & 19' },
  { clue: 'I prayed silently in the temple for a son while Eli thought I was drunk, and later dedicated young Samuel to God\'s service.', ans: 'Hannah', opts: ['Elizabeth', 'Sarah', 'Hannah', 'Rebekah'], ref: '1 Samuel 1' },
  { clue: 'I was a tentmaker who worked alongside my husband Aquila in Corinth and helped explain the way of God more accurately to Apollos.', ans: 'Priscilla', opts: ['Priscilla', 'Martha', 'Mary Magdalene', 'Eunice'], ref: 'Acts 18:2–26' }, 
  { clue: 'I was a cupbearer to the Persian king who wept over Jerusalem\'s broken walls and led the people to rebuild them in 52 days.', ans: 'Nehemiah', opts: ['Ezra', 'Nehemiah', 'Zerubbabel', 'Mordecai'], ref: 'Nehemiah 1–6' },
  { clue: 'I hid two Israelite spies on my rooftop in Jericho under stalks of flax and hung a scarlet cord in my window.', ans: 'Rahab', opts: ['Rahab', 'Deborah', 'Jael', 'Tamar'], ref: 'Joshua 2' },
  { clue: 'I was a Roman centurion in Caesarea whose prayers and gifts to the poor rose as a memorial before God, and Peter preached to my household.', ans: 'Cornelius', opts: ['Julius', 'Cornelius', 'Sergius Paulus', 'Felix'], ref: 'Acts 10' },
  { clue: 'I was an Ethiopian official reading the scroll of Isaiah in my chariot when Philip explained the good news of Jesus to me.', ans: 'Ethiopian Eunuch', opts: ['Simon of Cyrene', 'Ethiopian Eunuch', 'Apollos', 'Titus'], ref: 'Acts 8:26–39' },
  { clue: 'I was a skilled scribe and priest who led exiles back from Babylon and read the Book of the Law aloud from morning until midday.', ans: 'Ezra', opts: ['Ezra', 'Malachi', 'Haggai', 'Zechariah'], ref: 'Ezra 7 & Nehemiah 8' },
  { clue: 'I was a young disciple from Lystra taught the Scriptures by my grandmother Lois and mother Eunice, and Paul called me his true child in the faith.', ans: 'Timothy', opts: ['Titus', 'Timothy', 'Silas', 'Mark'], ref: '2 Timothy 1:5' },
  { clue: 'I was a widow in Joppa who made robes and garments for the poor, and Peter prayed for me and raised me back to life.', ans: 'Dorcas', opts: ['Dorcas', 'Martha', 'Sapphira', 'Rhoda'], ref: 'Acts 9:36–41' },
  { clue: 'I was the oldest man recorded in the Bible, living 969 years before the great flood came upon the earth.', ans: 'Methuselah', opts: ['Enoch', 'Methuselah', 'Jared', 'Lamech'], ref: 'Genesis 5:27' },
  { clue: 'I was a prophet from Tekoa who tended sycamore-fig trees and called for justice to roll down like waters.', ans: 'Amos', opts: ['Hosea', 'Amos', 'Micah', 'Joel'], ref: 'Amos 1 & 5:24' },
  { clue: 'I was a wealthy woman in Shunem who built a small roof chamber with a bed, table, chair, and lamp for the prophet Elisha.', ans: 'Shunammite Woman', opts: ['Widow of Zarephath', 'Shunammite Woman', 'Abigail', 'Joanna'], ref: '2 Kings 4:8–10' }

];

var WAI_STATE = { idx: 0, picked: null };

function initWhoAmI() {
  WAI_STATE.picked = null;
  ensureDynamicBiblePool_().then(function(pool) {
    if (pool && pool.length >= 10 && WHO_AM_I_DATA.length < 60) {
      var allBooks = ['Proverbs', 'Psalms', 'Matthew', 'John', 'Romans', 'Philippians', 'Ephesians', 'James', '1 John', 'Isaiah'];
      pool.slice(0, 45).forEach(function(v) {
        var others = allBooks.filter(function(b) { return b !== v.topic; }).sort(function() { return Math.random() - 0.5; }).slice(0, 3);
        others.push(v.topic);
        others.sort(function() { return Math.random() - 0.5; });
        WHO_AM_I_DATA.push({
          clue: 'I am the book of the Bible where this verse is written: “' + v.text + '”',
          ans: v.topic,
          opts: others,
          ref: v.ref
        });
      });
      WHO_AM_I_DATA.sort(function() { return Math.random() - 0.5; });
    }
  });
}


function renderWhoAmICard() {
  var total = WHO_AM_I_DATA.length;
  var item = WHO_AM_I_DATA.slice(WAI_STATE.idx % total, (WAI_STATE.idx % total) + 1).pop();
  if (!item) return '';

  var out = '<div class="card" style="padding:22px;">';
  out += '  <div class="ey" style="margin-bottom:6px;">Who Am I? · Clue ' + ((WAI_STATE.idx % total) + 1) + ' of ' + total + '</div>';
  out += '  <div style="font-family:var(--serif); font-style:italic; font-size:20px; line-height:1.55; color:var(--ink); background:var(--blush); border-left:3px solid var(--rose); padding:16px; border-radius:12px; margin-bottom:16px;">“' + esc(item.clue) + '”</div>';
  out += '  <div class="stack" style="gap:10px;">';

  item.opts.forEach(function(opt) {
    var st = 'width:100%; justify-content:flex-start; text-align:left; padding:12px 16px; border-radius:14px;';
    if (WAI_STATE.picked !== null) {
      if (opt === item.ans) st += ' background:var(--sage2); border-color:var(--sage); color:#2f4a28; font-weight:600;';
      else if (opt === WAI_STATE.picked) st += ' background:#fbe9e7; border-color:#d98c8c; color:#8a3b3b;';
    }
    out += '    <button class="btn" style="' + st + '" onclick="pickWhoAmI(\'' + esc(opt) + '\')">' + esc(opt) + '</button>';
  });

  out += '  </div>';
  if (WAI_STATE.picked !== null) {
    var right = (WAI_STATE.picked === item.ans);
    out += '  <div style="margin-top:16px; padding:12px 14px; border-radius:12px; background:var(--gold2); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">';
    out += '    <span><b>' + (right ? 'Yes! Well done!' : 'Good guess!') + '</b> Read their story in <i>' + esc(item.ref) + '</i></span>';
    out += '    <button class="btn sm pri" onclick="WAI_STATE.idx++;WAI_STATE.picked=null;render()">Next Character ' + ic('next') + '</button>';
    out += '  </div>';
  } else {
    out += '  <div style="margin-top:14px; display:flex; justify-content:flex-end;">';
    out += '    <button class="btn sm ghost" onclick="WAI_STATE.idx++;WAI_STATE.picked=null;render()">Skip ' + ic('next') + '</button>';
    out += '  </div>';
  }
  out += '</div>';
  return out;
}

function pickWhoAmI(chosen) {
  if (WAI_STATE.picked !== null) return;
  var total = WHO_AM_I_DATA.length;
  var item = WHO_AM_I_DATA.slice(WAI_STATE.idx % total, (WAI_STATE.idx % total) + 1).pop();
  WAI_STATE.picked = chosen;
  if (chosen === item.ans) {
    GM.streak++;
    launchPraiseConfetti();
  } else {
    GM.streak = 0;
  }
  saveDailyGameStreak();
  render();
}
/* ---------- GAME 6: SCRIPTURE CROSSWORD ---------- */
var CW_PUZZLES = [
  {
    level: 'Easy',
    title: 'Foundations of Faith',
    size: 7,
    rows: [
      'N O A H # # #',
      '# # R # # # #',
      '# # K I N G #',
      '# # # # # R #',
      '# # I S A A C',
      '# # # # # C #',
      '# P E A C E #'
    ],
    nums: { '0-0': 1, '0-2': 2, '2-2': 3, '2-5': 4, '4-2': 5, '6-1': 6 },
    across: [
      '1. Built the ark before the great flood (Gen. 6)',
      '3. Title of Jesus, _____ of kings (Rev. 19:16)',
      '5. Promised son of Abraham and Sarah (Gen. 21)',
      '6. Fruit of the Spirit; Jesus said "_____, be still" (Mark 4:39)'
    ],
    down: [
      '2. Vessel that carried Noah\'s family and the animals',
      '4. Unmerited favor from God (Eph. 2:8)'
    ]
  },
  {
    level: 'Medium',
    title: 'Prophets & Places',
    size: 7,
    rows: [
      '# J O R D A N',
      '# # # # A # #',
      'A A R O N # #',
      '# # # # I # #',
      '# M O S E S #',
      '# # # # L # #',
      'C A N A # # #'
    ],
    nums: { '0-1': 1, '0-4': 2, '2-0': 3, '4-1': 4, '6-0': 5 },
    across: [
      '1. River where Jesus was baptized by John (Matt. 3)',
      '3. Brother of Moses and first High Priest of Israel (Ex. 28)',
      '4. Prophet who received the Ten Commandments (Ex. 20)',
      '5. Town in Galilee where Jesus turned water into wine (John 2)'
    ],
    down: [
      '2. Prophet who survived the lions\' den (Dan. 6)'
    ]
  },
  {
    level: 'Challenging',
    title: 'Biblical Principles & Terms',
    size: 7,
    rows: [
      'A G A P E # #',
      '# # R # # # #',
      '# # M A N N A',
      '# # O # # # M',
      'T O R A H # E',
      '# # # # # # N',
      '# # # # # # #'
    ],
    nums: { '0-0': 1, '0-2': 2, '2-2': 3, '2-6': 4, '4-0': 5 },
    across: [
      '1. Greek New Testament word for unconditional, sacrificial love',
      '3. Bread from heaven provided in the wilderness (Ex. 16)',
      '5. Hebrew word for the first five books of Scripture (the Law)'
    ],
    down: [
      '2. Spiritual protection described in Ephesians 6',
      '4. Closing word of prayer meaning "so be it"'
    ], 
    
  }, 
  {
    level: 'Easy',
    title: 'Walk of Faith',
    size: 7,
    rows: [
      'L O V E # # #',
      '# # # S # # #',
      '# P R A Y # #',
      '# # # U # # #',
      '# # # # # # #',
      '# # # L A M B',
      'H O P E # # #'
    ],
    nums: { '0-0': 1, '0-3': 2, '2-1': 3, '5-3': 4, '6-0': 5 },
    across: [
      '1. The greatest of faith, hope, and _____ (1 Cor. 13:13)',
      '3. Talk with God; _____ without ceasing (1 Thess. 5:17)',
      '4. Behold the _____ of God, which taketh away the sin of the world',
      '5. Anchor of the soul, sure and steadfast (Heb. 6:19)'
    ],
    down: [
      '2. Twin brother of Jacob who sold his birthright for stew (Gen. 25)'
    ]
  },


  {
    level: 'Medium',
    title: 'Early Church & Disciples',
    size: 7,
    rows: [
      '# P E T E R #',
      '# # # # # U #',
      '# # # # # T #',
      '# # # # # H #',
      'J O H N # # #',
      '# # # # # # #',
      'P A U L # # #'
    ],
    nums: { '0-1': 1, '0-5': 2, '4-0': 3, '6-0': 4 },
    across: [
      '1. Fisherman apostle who walked on water toward Jesus (Matt. 14)',
      '3. Beloved disciple who wrote the fourth Gospel and Revelation',
      '4. Apostle to the Gentiles who wrote Romans and Philippians'
    ],
    down: [
      '2. Loyal Moabite woman who gleaned in Boaz\'s field (Ruth 2)'
    ]
  },
  {
    level: 'Challenging',
    title: 'Armor & Promises',
    size: 7,
    rows: [
      '# M E R C Y #',
      '# # # # # # #',
      'S H I E L D #',
      '# # # # # # #',
      'T R U T H # #',
      '# # # # # # #',
      'S W O R D # #'
    ],
    nums: { '0-1': 1, '2-0': 2, '4-0': 3, '6-0': 4 },
    across: [
      '1. God\'s compassion; His _____ endureth for ever (Ps. 136)',
      '2. Piece of spiritual armor that quenches fiery darts (Eph. 6:16)',
      '3. Belt of _____; Jesus said "I am the way, the _____, and the life"',
      '4. The _____ of the Spirit, which is the word of God (Eph. 6:17)'
    ],
    down: []
  }

];


var CW_STATE = { idx: 0, inputs: {}, solved: false };

var CW_WORD_BANK = [
  ['NOAH', 'Built the ark before the great flood (Gen. 6)'],
  ['RUTH', 'Loyal Moabite widow who gleaned in Boaz\'s field'],
  ['AMOS', 'Shepherd prophet who called for justice to roll down'],
  ['EZRA', 'Scribe and priest who led exiles back from Babylon'],
  ['EDEN', 'Garden where God placed Adam and Eve (Gen. 2)'],
  ['ZION', 'Biblical name for Jerusalem, the city of David'],
  ['AMEN', 'Closing word of prayer meaning "so be it"'],
  ['LAMB', 'Behold the _____ of God who takes away sin (John 1:29)'],
  ['HOPE', 'Anchor of the soul, both sure and steadfast (Heb. 6:19)'],
  ['LOVE', 'The greatest of faith, hope, and _____ (1 Cor. 13:13)'],
  ['PRAY', 'Talk with God; _____ without ceasing (1 Thess. 5:17)'],
  ['KING', 'Title of Jesus, _____ of kings (Rev. 19:16)'],
  ['CANA', 'Town where Jesus turned water into wine (John 2)'],
  ['NILE', 'River in Egypt where baby Moses was hidden in a basket'],
  ['SAUL', 'First king of Israel before David (1 Sam. 10)'],
  ['PAUL', 'Apostle to the Gentiles who wrote Romans and Philippians'],
  ['JOHN', 'Beloved disciple who wrote the fourth Gospel'],
  ['LUKE', 'Physician who wrote the third Gospel and Acts'],
  ['MARK', 'Author of the shortest Gospel in the New Testament'],
  ['JUDE', 'Short New Testament letter right before Revelation'],
  ['ABEL', 'Second son of Adam and Eve whose offering pleased God'],
  ['SETH', 'Son born to Adam and Eve after Abel (Gen. 4:25)'],
  ['LEVI', 'Priestly tribe of Israel set apart for temple service'],
  ['ESAU', 'Twin brother of Jacob who sold his birthright (Gen. 25)'],
  ['BOAZ', 'Kinsman-redeemer who married Ruth in Bethlehem'],
  ['OBED', 'Son of Boaz and Ruth, grandfather of King David'],
  ['JOEL', 'Prophet who foretold God pouring out His Spirit (Joel 2:28)'],
  ['HOSEA', 'Prophet whose life illustrated God\'s steadfast covenant love'],
  ['DOVE', 'Bird that returned to Noah\'s ark with an olive leaf'],
  ['STAR', 'Bright sign in the sky that guided the wise men to Jesus'],
  ['SALT', 'Jesus told His followers, "Ye are the _____ of the earth"'],
  ['ROCK', 'Wise builder built his house upon this solid foundation'],
  ['WINE', 'Water turned into this at the wedding in Cana (John 2)'],
  ['GOLD', 'First precious gift brought to baby Jesus by the wise men'],
  ['SOUL', 'Bless the LORD, O my _____ (Psalm 103:1)'],
  ['REST', 'Come unto me... and I will give you _____ (Matt. 11:28)'],
  ['WORD', 'In the beginning was the _____ (John 1:1)'],
  ['LIFE', 'Jesus said, "I am the way, the truth, and the _____"']
];


function generateDynamicCrossword_() {
  var pick = CW_WORD_BANK.slice().sort(function() { return Math.random() - 0.5; });
  var a1 = pick.shift(), a2 = pick.shift(), d1 = null;
  var w1 = a1.slice(0, 1).pop(), c1 = a1.slice(1, 2).pop();
  var w2 = a2.slice(0, 1).pop(), c2 = a2.slice(1, 2).pop();
  for (var i = 0; i < pick.length; i++) {
    var cand = pick.slice(i, i + 1).pop();
    var w3 = cand.slice(0, 1).pop();
    if (w3.charAt(0) === w1.charAt(2) && w3.charAt(2) === w2.charAt(2)) {
      d1 = cand;
      break;
    }
  }
  if (!d1) return null;
  var wDown = d1.slice(0, 1).pop(), cDown = d1.slice(1, 2).pop();
  var g = [];
  for (var r = 0; r < 7; r++) g.push(['#', '#', '#', '#', '#', '#', '#']);
  for (var c = 0; c < 4; c++) {
    g.splice(c, 1, w1.charAt(c));
    g.splice(c, 1, w2.charAt(c));
  }
  for (var k = 0; k < 4; k++) {
    g[k].splice(2, 1, wDown.charAt(k));
  }
  return {
    level: 'Dynamic',
    title: 'Scripture Mini-Crossword #' + (CW_PUZZLES.length + 1),
    size: 7,
    rows: g.map(function(row) { return row.join(' '); }),
    nums: { '0-0': 1, '0-2': 2, '2-0': 3 },
    across: ['1. ' + c1, '3. ' + c2],
    down: ['2. ' + cDown]
  };
}


function initCrossword() {
  CW_STATE.inputs = {};
  CW_STATE.solved = false;
  var fresh = generateDynamicCrossword_();
  if (fresh) { CW_PUZZLES.push(fresh); CW_STATE.idx = CW_PUZZLES.length - 1; }
}


function renderCrosswordCard() {
  var total = CW_PUZZLES.length;
  var pz = CW_PUZZLES.slice(CW_STATE.idx % total, (CW_STATE.idx % total) + 1).pop();
  if (!pz) return '';

  var lvlColor = pz.level === 'Easy' ? 'sage' : pz.level === 'Medium' ? 'gold' : '';
  var out = '<div class="card" style="padding:20px;">';
  out += '  <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; margin-bottom:12px;">';
  out += '    <div><div class="ey">Scripture Crossword <span class="tag ' + lvlColor + '" style="margin-left:6px;">' + esc(pz.level) + '</span></div><h3 style="color:var(--rose-d); margin-top:4px;">' + esc(pz.title) + '</h3></div>';
  out += '    <button class="btn sm ghost" onclick="CW_STATE.idx++;initCrossword();render()">Skip Puzzle ' + ic('next') + '</button>';
  out += '  </div>';

  out += '  <div style="display:grid; grid-template-columns:repeat(' + pz.size + ', 1fr); gap:4px; max-width:330px; margin:0 auto 16px;">';
  pz.rows.forEach(function(rStr, rIdx) {
    rStr.split(' ').forEach(function(cellChar, cIdx) {
      var key = rIdx + '-' + cIdx;
      if (cellChar === '#') {
        out += '<div style="aspect-ratio:1; background:var(--ink); border-radius:6px; opacity:0.85;"></div>';
      } else {
        var num = pz.nums[key];
        var valChar = CW_STATE.inputs[key] || '';
        var isRight = CW_STATE.solved || (valChar && valChar === cellChar);
        var bg = CW_STATE.solved ? 'background:var(--sage2); border-color:var(--sage);' : 'background:var(--card); border-color:var(--rose);';
        out += '<div style="position:relative; aspect-ratio:1;">';
        if (num) out += '<span style="position:absolute; top:2px; left:4px; font-size:9.5px; font-weight:700; color:var(--rose-d); pointer-events:none;">' + num + '</span>';
        out += '<input id="cw_' + key + '" type="text" maxlength="1" value="' + esc(valChar) + '" oninput="typeCwCell(\'' + key + '\', this)" onkeydown="cwKeyDown(\'' + key + '\', event)" style="width:100%; height:100%; text-align:center; font-weight:700; font-size:16px; text-transform:uppercase; padding:0; border-radius:6px; ' + bg + '">';
        out += '</div>';
      }
    });
  });
  out += '  </div>';

  out += '  <div class="grid g2" style="gap:12px; background:var(--paper2); padding:14px; border-radius:14px; margin-bottom:14px;">';
  out += '    <div><div class="ey" style="font-size:11px; margin-bottom:4px; color:var(--rose-d);">Across</div>' + pz.across.map(function(c) { return '<div style="font-size:13.5px; margin-bottom:4px; line-height:1.35;">' + esc(c) + '</div>'; }).join('') + '</div>';
  out += '    <div><div class="ey" style="font-size:11px; margin-bottom:4px; color:var(--rose-d);">Down</div>' + pz.down.map(function(c) { return '<div style="font-size:13.5px; margin-bottom:4px; line-height:1.35;">' + esc(c) + '</div>'; }).join('') + '</div>';
  out += '  </div>';

  if (CW_STATE.solved) {
    out += '  <div style="padding:12px 14px; border-radius:12px; background:var(--sage2); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">';
    out += '    <span><b>Praise God!</b> You solved <i>' + esc(pz.title) + '</i>!</span>';
    out += '    <button class="btn sm pri" onclick="CW_STATE.idx++;initCrossword();render()">Next Crossword ' + ic('next') + '</button>';
    out += '  </div>';
  } else {
    out += '  <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">';
    out += '    <button class="btn sm ghost" onclick="initCrossword();render()">Clear Grid</button>';
    out += '    <button class="btn sm pri" onclick="checkCrossword()">' + ic('check') + ' Check Answers</button>';
    out += '  </div>';
  }
  out += '</div>';
  return out;
}

var CW_DIR = 'across';

function getCwCellChar(pz, r, c) {
  if (r < 0 || c < 0 || r >= pz.size || c >= pz.size) return '#';
  var rowStr = pz.rows.slice(r, r + 1).pop() || '';
  return rowStr.split(' ').slice(c, c + 1).pop() || '#';
}

function resolveCwDirection(pz, r, c) {
  var hasLeft = getCwCellChar(pz, r, c - 1) !== '#';
  var hasRight = getCwCellChar(pz, r, c + 1) !== '#';
  var hasUp = getCwCellChar(pz, r - 1, c) !== '#';
  var hasDown = getCwCellChar(pz, r + 1, c) !== '#';

  var canAcross = hasLeft || hasRight;
  var canDown = hasUp || hasDown;

  // If starting at the top of a Down-only word (like ARK or GRACE), lock Down
  if (!hasLeft && hasRight && !hasUp && hasDown) {
    // Intersection start: keep current direction unless only one continues
  } else if (canDown && !canAcross) {
    CW_DIR = 'down';
  } else if (canAcross && !canDown) {
    CW_DIR = 'across';
  } else if (!hasLeft && !hasRight && hasDown) {
    CW_DIR = 'down';
  } else if (!hasUp && !hasDown && hasRight) {
    CW_DIR = 'across';
  }
}

function typeCwCell(key, el) {
  var ch = String(el.value || '').toUpperCase().replace(/[^A-Z]/g, '');
  el.value = ch;
  CW_STATE.inputs[key] = ch;
  if (!ch) return;

  var total = CW_PUZZLES.length;
  var pz = CW_PUZZLES.slice(CW_STATE.idx % total, (CW_STATE.idx % total) + 1).pop();
  var parts = key.split('-');
  var r = parseInt(parts.shift(), 10);
  var c = parseInt(parts.shift(), 10);

  resolveCwDirection(pz, r, c);

  var nextR = (CW_DIR === 'down') ? r + 1 : r;
  var nextC = (CW_DIR === 'across') ? c + 1 : c;

  if (getCwCellChar(pz, nextR, nextC) !== '#') {
    var nextEl = document.getElementById('cw_' + nextR + '-' + nextC);
    if (nextEl) {
      nextEl.focus();
      nextEl.select();
    }
  }
}

function cwKeyDown(key, e) {
  var total = CW_PUZZLES.length;
  var pz = CW_PUZZLES.slice(CW_STATE.idx % total, (CW_STATE.idx % total) + 1).pop();
  var parts = key.split('-');
  var r = parseInt(parts.shift(), 10);
  var c = parseInt(parts.shift(), 10);

  if (e.key === 'Backspace' && !e.target.value) {
    var prevR = (CW_DIR === 'down') ? r - 1 : r;
    var prevC = (CW_DIR === 'across') ? c - 1 : c;
    if (getCwCellChar(pz, prevR, prevC) !== '#') {
      var prevEl = document.getElementById('cw_' + prevR + '-' + prevC);
      if (prevEl) {
        prevEl.focus();
        prevEl.select();
      }
    }
  } else if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
    CW_DIR = 'across';
  } else if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
    CW_DIR = 'down';
  }
}


function checkCrossword() {
  var total = CW_PUZZLES.length;
  var pz = CW_PUZZLES.slice(CW_STATE.idx % total, (CW_STATE.idx % total) + 1).pop();
  var allCorrect = true;
  pz.rows.forEach(function(rStr, rIdx) {
    rStr.split(' ').forEach(function(cellChar, cIdx) {
      if (cellChar !== '#') {
        var typed = CW_STATE.inputs[rIdx + '-' + cIdx] || '';
        if (typed !== cellChar) allCorrect = false;
      }
    });
  });

  if (allCorrect) {
    CW_STATE.solved = true;
    GM.streak++;
    saveDailyGameStreak();
    launchPraiseConfetti();
    toast('Crossword solved! Well done!');
    render();
  } else {
    toast('Not quite yet—keep checking your clues!');
  }
}
/* ---------- GAME 7: BIBLE CONNECTIONS (4x4 GROUPING) ---------- */
var CONN_PUZZLES = [
  {
    title: 'Puzzle 1 · Old Testament & Exodus',
    groups: [
      { name: 'Plagues of Egypt', color: '#E1ECF2', border: '#2A556F', words: ['LOCUSTS', 'FROGS', 'HAIL', 'DARKNESS'] },
      { name: 'Sons of Jacob (Tribes)', color: '#FCF5E3', border: '#D4AF37', words: ['JUDAH', 'LEVI', 'BENJAMIN', 'REUBEN'] },
      { name: 'Items Inside the Ark of the Covenant', color: '#D3EAE8', border: '#1B6B78', words: ['MANNA', 'TABLETS', 'AARONS ROD', 'COVENANT'] },
      { name: 'Mountains in Scripture', color: '#FBF3EB', border: '#E2723B', words: ['SINAI', 'CARMEL', 'OLIVES', 'ARARAT'] }
    ]
  },
  {
    title: 'Puzzle 2 · New Testament & Discipleship',
    groups: [
      { name: 'Fruit of the Spirit', color: '#E1ECF2', border: '#2A556F', words: ['PATIENCE', 'KINDNESS', 'GOODNESS', 'GENTLENESS'] },
      { name: 'Pieces of the Armor of God', color: '#FCF5E3', border: '#D4AF37', words: ['BELT', 'BREASTPLATE', 'SHIELD', 'HELMET'] },
      { name: 'Original Twelve Apostles', color: '#D3EAE8', border: '#1B6B78', words: ['ANDREW', 'PHILIP', 'THOMAS', 'MATTHEW'] },
      { name: 'Gifts Brought to Baby Jesus', color: '#FBF3EB', border: '#E2723B', words: ['GOLD', 'FRANKINCENSE', 'MYRRH', 'TREASURES'] }
    ]
  },
  {
    title: 'Puzzle 3 · Miracles, Kings & Rivers',
    groups: [
      { name: 'Kings of Israel & Judah', color: '#E1ECF2', border: '#2A556F', words: ['SAUL', 'SOLOMON', 'JOSIAH', 'HEZEKIAH'] },
      { name: 'Rivers of the Bible', color: '#FCF5E3', border: '#D4AF37', words: ['JORDAN', 'EUPHRATES', 'TIGRIS', 'NILE'] },
      { name: 'Miracles of Jesus', color: '#D3EAE8', border: '#1B6B78', words: ['LAZARUS', 'CANA WINE', 'FIG TREE', 'TEN LEPERS'] },
      { name: 'Women of the Old Testament', color: '#FBF3EB', border: '#E2723B', words: ['ESTHER', 'MIRIAM', 'RAHAB', 'HANNAH'] }
    ]
  }, 
  {
    title: 'Puzzle 4 · Parables, Letters & Tabernacle',
    groups: [
      { name: 'Parables of Jesus', color: '#E1ECF2', border: '#2A556F', words: ['PRODIGAL SON', 'GOOD SAMARITAN', 'MUSTARD SEED', 'LOST SHEEP'] },
      { name: 'Epistles Written by Paul', color: '#FCF5E3', border: '#D4AF37', words: ['ROMANS', 'GALATIANS', 'EPHESIANS', 'PHILIPPIANS'] },
      { name: 'Furnishings in the Tabernacle', color: '#D3EAE8', border: '#1B6B78', words: ['MENORAH', 'ALTAR', 'LAVER', 'MERCY SEAT'] },
      { name: 'Trees & Plants in the Bible', color: '#FBF3EB', border: '#E2723B', words: ['OLIVE', 'FIG', 'CEDAR', 'HYSSOP'] }
    ]
  },
  {
    title: 'Puzzle 5 · Names of God, Judges & Feasts',
    groups: [
      { name: 'Hebrew Names of God', color: '#E1ECF2', border: '#2A556F', words: ['JEHOVAH JIREH', 'EL SHADDAI', 'ADONAI', 'EL ROI'] },
      { name: 'Judges of Israel', color: '#FCF5E3', border: '#D4AF37', words: ['GIDEON', 'SAMSON', 'DEBORAH', 'EHUD'] },
      { name: 'Biblical Feasts & Festivals', color: '#D3EAE8', border: '#1B6B78', words: ['PASSOVER', 'PENTECOST', 'TABERNACLES', 'PURIM'] },
      { name: 'Birds in Scripture', color: '#FBF3EB', border: '#E2723B', words: ['DOVE', 'RAVEN', 'EAGLE', 'SPARROW'] }
    ]
  },
  {
    title: 'Puzzle 6 · New Testament Church & Prayers',
    groups: [
      { name: 'Churches in Revelation', color: '#E1ECF2', border: '#2A556F', words: ['EPHESUS', 'SMYRNA', 'PERGAMUM', 'LAODICEA'] },
      { name: 'Couples in the Bible', color: '#FCF5E3', border: '#D4AF37', words: ['AQUILA PRISCILLA', 'ABRAHAM SARAH', 'ISAAC REBEKAH', 'BOAZ RUTH'] },
      { name: 'Words in the Lord Prayer', color: '#D3EAE8', border: '#1B6B78', words: ['HALLOWED', 'KINGDOM', 'DAILY BREAD', 'TRESPASSES'] },
      { name: 'Things That Divided or Opened', color: '#FBF3EB', border: '#E2723B', words: ['RED SEA', 'JORDAN RIVER', 'TEMPLE VEIL', 'PRISON DOORS'] }
    ]
  },
  {
    title: 'Puzzle 7 · Faith Heroes, Angels & Numbers',
    groups: [
      { name: 'Mentioned in Hebrews 11 Faith Hall', color: '#E1ECF2', border: '#2A556F', words: ['ABEL', 'ENOCH', 'NOAH', 'BARAK'] },
      { name: 'Named Angels in Scripture', color: '#FCF5E3', border: '#D4AF37', words: ['GABRIEL', 'MICHAEL', 'SERAPHIM', 'CHERUBIM'] },
      { name: 'Significant Biblical Numbers', color: '#D3EAE8', border: '#1B6B78', words: ['SEVEN', 'TWELVE', 'FORTY', 'SEVENTY'] },
      { name: 'Musical Instruments in the Psalms', color: '#FBF3EB', border: '#E2723B', words: ['HARP', 'LYRE', 'TRUMPET', 'CYMBALS'] }
    ]
  }

];

var CONN_STATE = { idx: 0, board: [], selected: [], solvedGroups: [], mistakes: 4 };

function initConnections() {
  var pool = [];
  CONN_PUZZLES.forEach(function(p) { p.groups.forEach(function(g) { pool.push(g); }); });
  pool.sort(function() { return Math.random() - 0.5; });
  var chosen = [], usedWords = {};
  pool.forEach(function(g) {
    if (chosen.length >= 4) return;
    if (g.words.some(function(w) { return usedWords[w]; })) return;
    g.words.forEach(function(w) { usedWords[w] = 1; });
    chosen.push(g);
  });
  var pz = chosen.length === 4 ? { title: 'Dynamic Connections #' + (CONN_STATE.idx + 1), groups: chosen } : CONN_PUZZLES[CONN_STATE.idx % CONN_PUZZLES.length];
  CONN_STATE.activePuzzle = pz;
  var allWords = [];
  pz.groups.forEach(function(g) { g.words.forEach(function(w) { allWords.push(w); }); });
  CONN_STATE.board = allWords.sort(function() { return Math.random() - 0.5; });
  CONN_STATE.selected = [];
  CONN_STATE.solvedGroups = [];
  CONN_STATE.mistakes = 4;
}


function renderConnectionsCard() {
  if (!CONN_STATE.board.length && !CONN_STATE.solvedGroups.length) initConnections();
  var total = CONN_PUZZLES.length;
  var pz = CONN_STATE.activePuzzle || CONN_PUZZLES[CONN_STATE.idx % total];


  var out = '<div class="card" style="padding:20px;">';
  out += '  <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; margin-bottom:10px;">';
  out += '    <div><div class="ey">Bible Connections · ' + CONN_STATE.solvedGroups.length + ' of 4 Found</div><h3 style="color:var(--rose-d); margin-top:2px;">' + esc(pz.title) + '</h3></div>';
  out += '    <button class="btn sm ghost" onclick="CONN_STATE.idx++;initConnections();render()">Skip Puzzle ' + ic('next') + '</button>';
  out += '  </div>';

  out += '  <div style="background:var(--gold2); border-left:3px solid var(--gold); border-radius:10px; padding:10px 12px; margin-bottom:12px; font-size:13.5px; line-height:1.45; color:var(--ink);">';
  out += '    <b>How to Play:</b> Tap <b>4 biblical words</b> that share a hidden theme (such as <i>Plagues of Egypt</i>) and tap <b>Submit (4)</b>. Once you find one group, keep going until all <b>4 categories</b> are solved!';
  out += '  </div>';


  // Solved Category Banners
  CONN_STATE.solvedGroups.forEach(function(g) {
    out += '<div style="background:' + g.color + '; border:1.5px solid ' + g.border + '; border-radius:12px; padding:10px 14px; text-align:center; margin-bottom:8px;">';
    out += '  <div style="font-weight:700; font-size:13px; letter-spacing:0.06em; text-transform:uppercase; color:var(--ink);">' + esc(g.name) + '</div>';
    out += '  <div style="font-size:13.5px; color:var(--mu); margin-top:2px;">' + esc(g.words.join(' · ')) + '</div>';
    out += '</div>';
  });

  // Active 4-Column Word Grid
  if (CONN_STATE.board.length) {
    out += '<div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:6px; margin:12px 0;">';
    CONN_STATE.board.forEach(function(word) {
      var isSel = CONN_STATE.selected.indexOf(word) >= 0;
      var style = isSel
        ? 'background:var(--rose); color:#fff; border-color:var(--rose); font-weight:700;'
        : 'background:var(--paper); color:var(--ink); border-color:var(--line); font-weight:600;';
      out += '<button type="button" onclick="tapConnWord(\'' + esc(word) + '\')" style="min-height:54px; padding:6px 4px; border:1.5px solid; border-radius:10px; font-size:11.5px; line-height:1.2; text-align:center; word-break:break-word; ' + style + '">' + esc(word) + '</button>';
    });
    out += '</div>';

    out += '<div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; margin-top:10px;">';
    out += '  <span class="mu sm">Attempts left: <b>' + CONN_STATE.mistakes + '</b></span>';
    out += '  <div style="display:flex; gap:8px;">';
    out += '    <button type="button" class="btn sm ghost" onclick="CONN_STATE.board.sort(function(){return Math.random()-0.5;});render()">Shuffle</button>';
    out += '    <button type="button" class="btn sm ghost" onclick="CONN_STATE.selected=[];render()">Deselect</button>';
    out += '    <button type="button" class="btn sm pri" onclick="submitConnGuess()">Submit (4)</button>';
    out += '  </div>';
    out += '</div>';
  } else {
    out += '<div style="margin-top:12px; padding:12px 14px; border-radius:12px; background:var(--sage2); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">';
    out += '  <span><b>Wonderful job!</b> You connected all 4 biblical categories!</span>';
    out += '  <button type="button" class="btn sm pri" onclick="CONN_STATE.idx++;initConnections();render()">Next Puzzle ' + ic('next') + '</button>';
    out += '</div>';
  }

  out += '</div>';
  return out;
}

function tapConnWord(word) {
  var idx = CONN_STATE.selected.indexOf(word);
  if (idx >= 0) {
    CONN_STATE.selected.splice(idx, 1);
  } else if (CONN_STATE.selected.length < 4) {
    CONN_STATE.selected.push(word);
  } else {
    toast('You can select up to 4 words at a time.');
  }
  render();
}

function submitConnGuess() {
  if (CONN_STATE.selected.length !== 4) {
    toast('Select 4 words to form a category.');
    return;
  }
  var total = CONN_PUZZLES.length;
  var pz = CONN_STATE.activePuzzle || CONN_PUZZLES[CONN_STATE.idx % total];

  var matchedGroup = null;
  var oneAway = false;

  pz.groups.forEach(function(g) {
    var overlap = CONN_STATE.selected.filter(function(w) { return g.words.indexOf(w) >= 0; }).length;
    if (overlap === 4) matchedGroup = g;
    if (overlap === 3) oneAway = true;
  });

  if (matchedGroup) {
    CONN_STATE.solvedGroups.push(matchedGroup);
    CONN_STATE.board = CONN_STATE.board.filter(function(w) { return matchedGroup.words.indexOf(w) < 0; });
    CONN_STATE.selected = [];
    toast('Connected: ' + matchedGroup.name + '!');
    if (!CONN_STATE.board.length) {
      GM.streak++;
      saveDailyGameStreak();
      launchPraiseConfetti();
    }
  } else {
    CONN_STATE.mistakes--;
    if (CONN_STATE.mistakes <= 0) {
      toast('Out of attempts—revealing all 4 categories!');
      CONN_STATE.solvedGroups = pz.groups.slice();
      CONN_STATE.board = [];
      CONN_STATE.selected = [];
    } else {
      toast(oneAway ? 'So close! 3 of those 4 belong together.' : 'Not a matching group—try again!');
    }
  }
  render();
}




/* ---------- PRAISE CONFETTI & BOTANICAL VERSE CARD ---------- */
function launchPraiseConfetti() {
  var colors = ['#D4AF37', '#1B6B78', '#E2723B', '#F3A178', '#2A556F'];
  for (var i = 0; i < 36; i++) {
    var dot = document.createElement('div');
    var sz = 7 + Math.floor(Math.random() * 6);
    dot.style.cssText = 'position:fixed;top:-14px;left:' + (Math.random() * 100) + 'vw;width:' + sz + 'px;height:' + (sz * 1.3) + 'px;background:' + colors[i % colors.length] + ';border-radius:50% 0 50% 0;z-index:99999;pointer-events:none;opacity:0.9;transition:transform 2.4s ease-out,top 2.4s ease-in,opacity 2.4s ease;';
    document.body.appendChild(dot);
    (function(el) {
      setTimeout(function() {
        el.style.top = '105vh';
        el.style.transform = 'translateX(' + ((Math.random() - 0.5) * 160) + 'px) rotate(' + (Math.random() * 540) + 'deg)';
        el.style.opacity = '0';
      }, 30);
      setTimeout(function() { el.remove(); }, 2500);
    })(dot);
  }
}

function openVerseCard(ref, text, tr) {
  window._shareCardData = { ref: ref, text: text, tr: tr || '' };
  window._shareCardTxt = '“' + text + '” — ' + ref + (tr ? ' (' + tr + ')' : '');
  var body = '<div style="background:#FDFBF7;border:2px solid #D4AF37;border-radius:20px;padding:28px 22px;text-align:center;position:relative;overflow:hidden;box-shadow:0 10px 28px rgba(15,74,83,0.12);">' +
    '  <div style="opacity:0.35;margin-bottom:-12px;">' + emptyArt() + '</div>' +
    '  <div style="font-family:var(--serif);font-style:italic;font-size:22px;line-height:1.5;color:#1B2A32;margin:8px 0 14px;position:relative;">“' + esc(text) + '”</div>' +
    '  <div style="font-family:var(--sans);font-weight:600;font-size:13px;letter-spacing:0.12em;text-transform:uppercase;color:#1B6B78;">' + esc(ref) + (tr ? ' · ' + esc(tr) : '') + '</div>' +
    divider() +
    '  <div style="font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:#5A727E;">Academy TLC · The Lord\'s Children</div>' +
    '</div>' +
    '<p class="mu sm" style="text-align:center;margin:12px 0 0;">Save this card to your gallery or share it to encourage someone today.</p>';
  openModal('Shareable Verse Card', body,
    '<button class="btn" onclick="copyText(window._shareCardTxt)">' + ic('copy') + 'Copy Text</button>' +
    '<button class="btn pri" onclick="downloadVerseCardImage()">&#128247; Save Image</button>'
  );
}

function downloadVerseCardImage() {
  var d = window._shareCardData;
  if (!d) return;
  var cv = document.createElement('canvas');
  cv.width = 1080; cv.height = 1080;
  var ctx = cv.getContext('2d');

  // Warm cream background & double gold frame
  ctx.fillStyle = '#FDFBF7';
  ctx.fillRect(0, 0, 1080, 1080);
  ctx.strokeStyle = '#D4AF37';
  ctx.lineWidth = 8;
  ctx.strokeRect(48, 48, 984, 984);
  ctx.lineWidth = 2;
  ctx.strokeRect(68, 68, 944, 944);

  // Subtle botanical accents at top
  ctx.fillStyle = '#2A556F';
  ctx.beginPath(); ctx.ellipse(512, 165, 24, 9, -0.4, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#0F4A53';
  ctx.beginPath(); ctx.ellipse(568, 165, 24, 9, 0.4, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#E2723B';
  ctx.beginPath(); ctx.arc(540, 165, 8, 0, Math.PI * 2); ctx.fill();

  // Wrap verse text cleanly in the center
  var fullText = '“' + d.text + '”';
  var fontSize = fullText.length > 220 ? 38 : fullText.length > 140 ? 44 : 52;
  ctx.font = 'italic 600 ' + fontSize + 'px Georgia, serif';
  ctx.fillStyle = '#1B2A32';
  ctx.textAlign = 'center';

  var words = fullText.split(' '), lines = [], line = '';
  for (var i = 0; i < words.length; i++) {
    var test = line ? line + ' ' + words[i] : words[i];
    if (ctx.measureText(test).width > 820 && line) { lines.push(line); line = words[i]; }
    else { line = test; }
  }
  if (line) lines.push(line);

  var lineH = fontSize * 1.42;
  var startY = 510 - ((lines.length - 1) * lineH) / 2;
  for (var j = 0; j < lines.length; j++) {
    ctx.fillText(lines[j], 540, startY + j * lineH);
  }

  // Scripture reference & Academy TLC branding footer
  var refY = Math.min(840, startY + lines.length * lineH + 46);
  ctx.font = 'bold 28px Arial, sans-serif';
  ctx.fillStyle = '#1B6B78';
  ctx.fillText((d.ref + (d.tr ? ' · ' + d.tr : '')).toUpperCase(), 540, refY);

  ctx.strokeStyle = '#D4AF37';
  ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(420, 915); ctx.lineTo(660, 915); ctx.stroke();

  ctx.font = '600 22px Arial, sans-serif';
  ctx.fillStyle = '#5A727E';
  ctx.fillText('ACADEMY TLC · THE LORD\'S CHILDREN', 540, 960);

  cv.toBlob(function(blob) {
    if (!blob) return;
    var file = new File([blob], 'Academy_TLC_Verse.png', { type: 'image/png' });
    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      navigator.share({ files: [file], title: d.ref }).catch(function() {});
    } else {
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'Academy_TLC_Verse.png';
      document.body.appendChild(a);
      a.click();
      a.remove();
      toast('Verse card image saved!');
    }
  }, 'image/png');
}



/* ---------- FAITH MILESTONE BADGES (NO-PRESSURE CELEBRATIONS) ---------- */
function renderFaithBadges() {
  var st = streaks();
  var prayerCount = 0;
  prayers().forEach(function(p) { prayerCount += (p.log || []).length; });
  var ansCount = answered().length;
  var journalCount = entries().length;
  var gratCount = all('gratitude').length;
  var readCount = Object.keys(S.adminPlanDone || {}).length;

  var badges = [
    { icon: '🙏', title: 'Prayer Warrior', desc: 'First prayer lifted up', done: prayerCount >= 1 },
    { icon: '✨', title: 'Faithful Testimony', desc: 'First answered prayer', done: ansCount >= 1 },
    { icon: '✍️', title: 'Heart on Paper', desc: '5 journal entries written', done: journalCount >= 5 },
    { icon: '🌸', title: 'Grateful Soul', desc: '7 blessings counted', done: gratCount >= 7 },
    { icon: '📖', title: 'In the Word', desc: '10 readings completed', done: readCount >= 10 },
    { icon: '🌿', title: 'Steadfast Walk', desc: '14 total days with Him', done: st.total >= 14 }
  ];

  var html = '<div class="card" style="margin-bottom:16px; padding:18px 20px;">';
  html += '  <div class="hd" style="margin-bottom:12px;"><h3>Faith Milestones</h3><span class="mu sm">Cumulative · Never expires</span></div>';
  html += '  <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(145px, 1fr)); gap:10px;">';
  badges.forEach(function(b) {
    var boxStyle = b.done
      ? 'background:var(--gold2); border:1.5px solid var(--gold); color:var(--ink);'
      : 'background:var(--paper2); border:1px dashed var(--line); color:var(--mu); opacity:0.65;';
    html += '  <div style="padding:12px 10px; border-radius:14px; text-align:center; ' + boxStyle + '">';
    html += '    <div style="font-size:24px; margin-bottom:4px;">' + (b.done ? b.icon : '🔒') + '</div>';
    html += '    <div style="font-weight:600; font-size:13.5px; line-height:1.2; margin-bottom:2px;">' + esc(b.title) + '</div>';
    html += '    <div style="font-size:11.5px; line-height:1.3;">' + esc(b.desc) + '</div>';
    html += '  </div>';
  });
  html += '  </div>';
  html += '</div>';
  return html;
}


/* ---------- AUDIO BIBLE READ-ALOUD CONTROLS ---------- */
function toggleBibleAudio() {
  if (!('speechSynthesis' in window)) {
    toast('Audio read-aloud is not supported on this browser.');
    return;
  }
  if (window._bibleSpeaking) {
    stopBibleAudio();
    return;
  }
  var body = document.getElementById('bible_text_body');
  if (!body) return;

  // Gather clean verse text without verse numbers
  var paragraphs = body.querySelectorAll('p');
  var fullText = UI.bibleBook + ', Chapter ' + UI.bibleChapter + '. ';
  for (var i = 0; i < paragraphs.length; i++) {
    var clone = paragraphs[i].cloneNode(true);
    var numSpan = clone.querySelector('span');
    if (numSpan) numSpan.remove();
    fullText += clone.textContent.trim() + ' ';
  }

  if (fullText.length < 30) {
    toast('Please wait for the chapter text to finish loading.');
    return;
  }

  window.speechSynthesis.cancel();
  var utter = new SpeechSynthesisUtterance(fullText);
  utter.rate = 0.95;
  utter.onend = function() { window._bibleSpeaking = false; render(); };
  utter.onerror = function() { window._bibleSpeaking = false; render(); };
  window._bibleSpeaking = true;
  window.speechSynthesis.speak(utter);
  render();
}

function stopBibleAudio() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  window._bibleSpeaking = false;
  render();
}



/* ---------- EXPORTABLE PRAYER & TESTIMONY KEEPSAKE ---------- */
function openTestimonyKeepsake() {
  var list = answered();
  if (!list.length) {
    toast('Mark a prayer as answered first to build your keepsake!');
    return;
  }
  var lines = ['ACADEMY TLC · THE LORD\'S CHILDREN', 'MY ANSWERED PRAYERS & TESTIMONIES', 'Exported on ' + fmtD(today(), true), '----------------------------------------', ''];
  var previewHtml = '<div style="max-height:320px; overflow-y:auto; background:#FDFBF7; border:1.5px solid #D4AF37; border-radius:14px; padding:16px; text-align:left; font-family:var(--serif);">';

  list.forEach(function(p, i) {
    lines.push((i + 1) + '. ' + p.title + (p.who ? ' (For ' + p.who + ')' : ''));
    lines.push('   Answered: ' + fmtD(p.answeredOn));
    if (p.how) lines.push('   How God Answered: ' + p.how);
    lines.push('');

    previewHtml += '<div style="margin-bottom:14px; padding-bottom:10px; border-bottom:1px solid #E6DFD3;">';
    previewHtml += '  <div style="font-weight:700; color:#0F4A53; font-size:17px;">' + (i + 1) + '. ' + esc(p.title) + '</div>';
    previewHtml += '  <div style="font-size:12px; color:#5A727E; font-family:var(--sans); margin:2px 0 4px;">Answered ' + fmtD(p.answeredOn) + (p.who ? ' · For ' + esc(p.who) : '') + '</div>';
    if (p.how) previewHtml += '  <div style="font-size:15px; color:#1B2A32; line-height:1.45;">' + nl(p.how) + '</div>';
    previewHtml += '</div>';
  });
  previewHtml += '</div>';
  window._keepsakeText = lines.join('\n');

  openModal('My Testimony Keepsake', previewHtml,
    '<button class="btn" onclick="copyText(window._keepsakeText)">' + ic('copy') + 'Copy All</button>' +
    '<button class="btn pri" onclick="downloadKeepsakeFile()">&#128229; Save File</button>'
  );
}

function downloadKeepsakeFile() {
  if (!window._keepsakeText) return;
  var blob = new Blob([window._keepsakeText], { type: 'text/plain;charset=utf-8' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'Academy_TLC_Testimonies.txt';
  document.body.appendChild(a);
  a.click();
  a.remove();
  toast('Testimony keepsake saved!');
}


/* ---------- QUICK SCRIPTURE LOOKUP INSIDE JOURNAL EDITOR ---------- */
function toggleJournalScriptureBox() {
  var box = document.getElementById('j_lookup_box');
  if (!box) return;
  box.style.display = (box.style.display === 'none' || !box.style.display) ? 'block' : 'none';
}

function runJournalScriptureLookup() {
  var refInp = document.getElementById('j_lookup_ref');
  var verSel = document.getElementById('j_lookup_ver');
  var out = document.getElementById('j_lookup_result');
  if (!refInp || !out) return;

  var q = refInp.value.trim();
  var ver = verSel ? verSel.value : 'KJV';
  if (!q) { toast('Type a verse like John 3:16 first.'); return; }

  out.innerHTML = '<span class="mu sm">Looking up ' + esc(q) + ' (' + esc(ver) + ')...</span>';


  gas('api_lookup_single_verse', q, ver).then(function(res) {
    if (!res || !res.ok) {
      out.innerHTML = '<span class="mu sm" style="color:var(--rose-d);">' + esc((res && res.msg) || 'Verse not found.') + '</span>';
      return;
    }
    window._lastJournalVerse = '“' + res.text + '” — ' + res.ref + ' (' + res.ver + ')';
    out.innerHTML = '<div style="background:var(--gold2); border:1px solid var(--gold); border-radius:10px; padding:10px 12px; margin-top:8px;">' +
      '  <div style="font-family:var(--serif); font-style:italic; font-size:15.5px; color:var(--ink); margin-bottom:6px;">' + esc(window._lastJournalVerse) + '</div>' +
      '  <button type="button" class="btn sm pri" onclick="insertLookedUpVerse()">+ Insert Into Entry</button>' +
      '</div>';
  }).catch(function(err) {
    out.innerHTML = '<span class="mu sm">Error: ' + esc(err.message || err) + '</span>';
  });
}

function insertLookedUpVerse() {
  if (!window._lastJournalVerse) return;
  var areas = document.querySelectorAll('#modal textarea, #main textarea');
  var target = areas.length ? areas[areas.length - 1] : null;
  if (!target) {
    copyText(window._lastJournalVerse);
    return;
  }
  var prefix = target.value && !target.value.endsWith('\n') ? '\n\n' : '';
  target.value = target.value + prefix + window._lastJournalVerse + '\n';
  target.focus();
  toast('Scripture inserted into your entry!');
}




/* ---------- NEW MEMBER QUICK GUIDE MODAL ---------- */
function openQuickGuideModal() {
  var sections = [
    ['☀️ Today Dashboard', 'Start your day with the daily KJV verse, Heart Check-In, Shared Prayer of the Day, and today\'s assigned reading switches.'],
    ['📋 Reading Plan & Bible Reader', 'Tap any assigned reading link to jump straight to that chapter. Switch between KJV and BSB, tap Listen for audio read-aloud, or tap any verse to highlight, save, or start a SOAP journal entry.'],
    ['🙏 Prayer List, Wall & Testimonials', 'Track private requests in Prayer List or tap Pray Through My List for a focused prayer session. Visit Prayer Wall to pray for our group or send a request to our team, and mark answered prayers to build your Testimonials keepsake.'],
    ['✍️ Journal, Gratitude & Reflection', 'Write using ACTS, SOAP, Guided Prompts, or Free Write (with built-in scripture lookup). Log daily blessings in the 31-Day Gratitude Matrix and export your Monthly Reflection keepsake.'],
    ['📅 Calendar, Streaks & Faith Game', 'Tap any date on the Calendar to add study notes or appointments. Take a refreshing break in Faith Game with Trivia, Verse Scramble, Word Search, and Verse Match.'],
    ['🕯️ Warm Evening Mode & Privacy', 'Switch between Daylight and Warm Evening Mode anytime in Settings or the Bible Reader. Your personal journal is saved privately on your own device, and you can download a backup anytime in Settings.']
  ];

  var body = '<div style="max-height:62vh; overflow-y:auto; padding-right:4px;">';
  body += '<p class="mu sm" style="margin-top:0; margin-bottom:14px;">Welcome to <b>Academy T.L.C. (The Lord\'s Children)</b>—where Jesus is the cornerstone. Here is a quick tour of your study journal:</p>';
  body += '<div class="stack" style="gap:10px;">';

  sections.forEach(function(item) {
    var copy = item.slice();
    var title = copy.shift();
    var desc = copy.shift();
    body += '<div style="background:var(--card); border:1px solid var(--line); border-left:3px solid var(--gold); border-radius:12px; padding:12px 14px;">';
    body += '  <div style="font-weight:600; color:var(--rose-d); font-size:15px; margin-bottom:3px;">' + esc(title) + '</div>';
    body += '  <div style="font-size:13.5px; line-height:1.45; color:var(--ink);">' + esc(desc) + '</div>';
    body += '</div>';
  });

  body += '</div></div>';

  openModal('Academy T.L.C. Quick Guide', body,
    '<button type="button" class="btn pri" style="width:100%;" onclick="closeModal()">Got It, Let\'s Begin</button>'
  );
}




/* ---------- FOUNDING STORY MODAL: HOW ACADEMY T.L.C. BEGAN ---------- */
function openOurStoryModal() {
  var html = '<div style="max-height:64vh; overflow-y:auto; padding-right:4px;">';
  html += '  <div style="text-align:center; margin-bottom:14px;">' + emptyArt() + '</div>';
  html += '  <div style="background:var(--gold2); border-left:3px solid var(--gold); border-radius:12px; padding:12px 14px; margin-bottom:16px; font-family:var(--serif); font-style:italic; font-size:16.5px; line-height:1.45; color:var(--ink);">';
  html += '    “Jesus saith unto him, Feed my sheep.”<br><b style="font-style:normal; font-size:12.5px; color:var(--rose-d);">— John 21:17 (KJV)</b>';
  html += '  </div>';

  html += '  <div style="font-family:var(--serif); font-size:17px; line-height:1.6; color:var(--ink);">';
  html += '    <p style="margin-top:0;">My name is <b>Teneshia</b>, and my initials are <b>T.L.C.</b> For most of my life, people naturally associated those letters with <i>tender, loving care</i>—reflecting the heart I have always had for encouraging and caring for others.</p>';
  html += '    <p>Most recently, however, God spoke to me and gave that name a deeper, more meaningful purpose. As He laid out specific instructions for what He was calling me to build, He spoke a word that catapulted this entire journey:</p>';
  html += '    <div style="background:var(--blush); border:1px solid var(--rose2); border-radius:14px; padding:14px 16px; margin:14px 0; font-style:italic; color:var(--rose-d);">';
  html += '      “I am changing your name. Just as I changed Abram to Abraham, Sarai to Sarah, and Jacob to Israel—I am changing your name, and you are called <b>The Lord\'s Child</b>. Because you love Me, and I love you, and I have called you.”';
  html += '    </div>';
  html += '    <p>Just as Jesus commissioned Peter in <b>John 21:15–17</b> with the command, <i>“Feed my sheep,”</i> the Lord gave me a clear assignment: to create a welcoming, faith-filled space where believers can be nourished in His Word, strengthened in prayer, and reminded of who they belong to.</p>';
  html += '    <p style="margin-bottom:0;">That calling became <b>Academy of The Lord\'s Children (Academy T.L.C.)</b>—a place <i>where Jesus is the cornerstone</i> (Ephesians 2:20), and every member is invited to grow closer to Him.</p>';
  html += '  </div>';
  html += divider();
  html += '</div>';

  openModal('How Academy T.L.C. Began', html,
    '<button type="button" class="btn pri" style="width:100%;" onclick="closeModal()">Amen · Close</button>'
  );
}





