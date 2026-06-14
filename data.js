const vocabularyData = [
  {
    "id": "1",
    "category": "Cuộc sống",
    "vi": "phanh (xe)",
    "jp": "ブレーキ",
    "kana": "ぶれーき",
    "en": "brake",
    "ipa": "/breɪk/",
    "cn": "刹车",
    "pinyin": "shāchē",
    "ko": "브레이크",
    "koreanReading": "beureikeu",
    "note": "",
    "examples": {
      "vi": "Hãy đạp phanh.",
      "jp": "ブレーキをかけてください。",
      "en": "Please apply the brake.",
      "cn": "请踩刹车。",
      "ko": "브레이크를 밟아 주세요."
    }
  },
  {
    "id": "2",
    "category": "Du lịch",
    "vi": "sân bay",
    "jp": "空港",
    "kana": "くうこう",
    "en": "airport",
    "ipa": "/ˈeəpɔːrt/",
    "cn": "机场",
    "pinyin": "jīchǎng",
    "ko": "공항",
    "koreanReading": "gonghang",
    "note": "",
    "examples": {
      "vi": "Tôi đi đến sân bay.",
      "jp": "空港へ行きます。",
      "en": "I go to the airport.",
      "cn": "我去机场。",
      "ko": "공항에 갑니다."
    }
  },
  {
    "id": "3",
    "category": "Cuộc sống",
    "vi": "gia đình",
    "jp": "家族",
    "kana": "かぞく",
    "en": "family",
    "ipa": "/ˈfæməli/",
    "cn": "家人",
    "pinyin": "jiārén",
    "ko": "가족",
    "koreanReading": "gajok",
    "note": "",
    "examples": {
      "vi": "Đây là gia đình tôi.",
      "jp": "これは私の家族です。",
      "en": "This is my family.",
      "cn": "这是我的家人。",
      "ko": "이것은 제 가족입니다."
    }
  },
  {
    "id": "4",
    "category": "Du lịch",
    "vi": "khách sạn",
    "jp": "ホテル",
    "kana": "ほてる",
    "en": "hotel",
    "ipa": "/hoʊˈtel/",
    "cn": "酒店",
    "pinyin": "jiǔdiàn",
    "ko": "호텔",
    "koreanReading": "hotel",
    "note": "",
    "examples": {
      "vi": "Tôi đã đặt khách sạn.",
      "jp": "ホテルを予約しました。",
      "en": "I booked a hotel.",
      "cn": "我预订了酒店。",
      "ko": "호텔을 예약했습니다."
    }
  },
  {
    "id": "5",
    "category": "Công việc",
    "vi": "cuộc họp",
    "jp": "会議",
    "kana": "かいぎ",
    "en": "meeting",
    "ipa": "/ˈmiːtɪŋ/",
    "cn": "会议",
    "pinyin": "huìyì",
    "ko": "회의",
    "koreanReading": "hoeui",
    "note": "",
    "examples": {
      "vi": "Tôi có cuộc họp lúc 9 giờ.",
      "jp": "9時に会議があります。",
      "en": "I have a meeting at nine.",
      "cn": "我九点有会议。",
      "ko": "저는 9시에 회의가 있습니다."
    }
  },
  {
    "id": "6",
    "category": "Gia đình",
    "vi": "gia đình",
    "jp": "家族",
    "kana": "かぞく",
    "en": "family",
    "ipa": "/ˈfæməli/",
    "cn": "家人",
    "pinyin": "jiārén",
    "ko": "가족",
    "koreanReading": "gajok",
    "note": "",
    "examples": {
      "vi": "Đây là gia đình tôi.",
      "jp": "これは私の家族です。",
      "en": "This is my family.",
      "cn": "这是我的家人。",
      "ko": "이것은 제 가족입니다。"
    }
  },
  {
    "id": "7",
    "category": "Gia đình",
    "vi": "bố",
    "jp": "父",
    "kana": "ちち",
    "en": "father",
    "ipa": "/ˈfɑːðər/",
    "cn": "爸爸",
    "pinyin": "bàba",
    "ko": "아버지",
    "koreanReading": "abeoji",
    "note": "",
    "examples": {
      "vi": "Bố tôi rất vui tính.",
      "jp": "父はとても明るいです。",
      "en": "My father is very cheerful.",
      "cn": "我爸爸很开朗。",
      "ko": "아버지는 아주 밝으십니다。"
    }
  },
  {
    "id": "8",
    "category": "Gia đình",
    "vi": "mẹ",
    "jp": "母",
    "kana": "はは",
    "en": "mother",
    "ipa": "/ˈmʌðər/",
    "cn": "妈妈",
    "pinyin": "māma",
    "ko": "어머니",
    "koreanReading": "eomeoni",
    "note": "",
    "examples": {
      "vi": "Mẹ tôi nấu ăn rất ngon.",
      "jp": "母は料理がとても上手です。",
      "en": "My mother cooks very well.",
      "cn": "我妈妈做饭很好吃。",
      "ko": "어머니는 요리를 아주 잘하십니다。"
    }
  },
  {
    "id": "9",
    "category": "Gia đình",
    "vi": "anh trai",
    "jp": "兄",
    "kana": "あに",
    "en": "older brother",
    "ipa": "/ˌoʊldər ˈbrʌðər/",
    "cn": "哥哥",
    "pinyin": "gēge",
    "ko": "형",
    "koreanReading": "hyeong",
    "note": "",
    "examples": {
      "vi": "Anh trai tôi thích thể thao.",
      "jp": "兄はスポーツが好きです。",
      "en": "My older brother likes sports.",
      "cn": "我哥哥喜欢运动。",
      "ko": "형은 운동을 좋아합니다。"
    }
  },
  {
    "id": "10",
    "category": "Gia đình",
    "vi": "chị gái",
    "jp": "姉",
    "kana": "あね",
    "en": "older sister",
    "ipa": "/ˌoʊldər ˈsɪstər/",
    "cn": "姐姐",
    "pinyin": "jiějie",
    "ko": "누나",
    "koreanReading": "nuna",
    "note": "",
    "examples": {
      "vi": "Chị gái tôi hay cười.",
      "jp": "姉はよく笑います。",
      "en": "My older sister smiles a lot.",
      "cn": "我姐姐常常笑。",
      "ko": "누나는 자주 웃습니다。"
    }
  },
  {
    "id": "11",
    "category": "Gia đình",
    "vi": "em trai",
    "jp": "弟",
    "kana": "おとうと",
    "en": "younger brother",
    "ipa": "/ˌjʌŋɡər ˈbrʌðər/",
    "cn": "弟弟",
    "pinyin": "dìdi",
    "ko": "남동생",
    "koreanReading": "namdongsaeng",
    "note": "",
    "examples": {
      "vi": "Em trai tôi rất khỏe.",
      "jp": "弟はとても元気です。",
      "en": "My younger brother is very energetic.",
      "cn": "我弟弟很有精神。",
      "ko": "남동생은 아주 활기찹니다。"
    }
  },
  {
    "id": "12",
    "category": "Gia đình",
    "vi": "em gái",
    "jp": "妹",
    "kana": "いもうと",
    "en": "younger sister",
    "ipa": "/ˌjʌŋɡər ˈsɪstər/",
    "cn": "妹妹",
    "pinyin": "mèimei",
    "ko": "여동생",
    "koreanReading": "yeodongsaeng",
    "note": "",
    "examples": {
      "vi": "Em gái tôi thích hát.",
      "jp": "妹は歌うことが好きです。",
      "en": "My younger sister likes singing.",
      "cn": "我妹妹喜欢唱歌。",
      "ko": "여동생은 노래하는 것을 좋아합니다。"
    }
  },
  {
    "id": "13",
    "category": "Gia đình",
    "vi": "ông",
    "jp": "祖父",
    "kana": "そふ",
    "en": "grandfather",
    "ipa": "/ˈɡrændˌfɑːðər/",
    "cn": "爷爷",
    "pinyin": "yéye",
    "ko": "할아버지",
    "koreanReading": "harabeoji",
    "note": "",
    "examples": {
      "vi": "Ông tôi kể chuyện rất hay.",
      "jp": "祖父は話がとても上手です。",
      "en": "My grandfather tells great stories.",
      "cn": "我爷爷讲故事很好。",
      "ko": "할아버지는 이야기를 아주 잘하십니다。"
    }
  },
  {
    "id": "14",
    "category": "Gia đình",
    "vi": "bà",
    "jp": "祖母",
    "kana": "そぼ",
    "en": "grandmother",
    "ipa": "/ˈɡrændˌmʌðər/",
    "cn": "奶奶",
    "pinyin": "nǎinai",
    "ko": "할머니",
    "koreanReading": "halmeoni",
    "note": "",
    "examples": {
      "vi": "Bà tôi rất hiền.",
      "jp": "祖母はとても優しいです。",
      "en": "My grandmother is very kind.",
      "cn": "我奶奶很温柔。",
      "ko": "할머니는 아주 다정하십니다。"
    }
  },
  {
    "id": "15",
    "category": "Gia đình",
    "vi": "con",
    "jp": "子ども",
    "kana": "こども",
    "en": "child",
    "ipa": "/tʃaɪld/",
    "cn": "孩子",
    "pinyin": "háizi",
    "ko": "아이",
    "koreanReading": "ai",
    "note": "",
    "examples": {
      "vi": "Con tôi cười rất đáng yêu.",
      "jp": "子どもはとてもかわいく笑います。",
      "en": "My child smiles very cutely.",
      "cn": "我的孩子笑得很可爱。",
      "ko": "아이는 아주 귀엽게 웃습니다。"
    }
  }
];