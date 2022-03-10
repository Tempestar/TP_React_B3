import "./styles.css";
import {
  Bracket,
  BracketGame,
  BracketGenerator
} from "react-tournament-bracket";
import React, {useState} from 'react'

export default function App() {

  //déclaration des joueurs
  const [Joueur1, setJoueur1] = useState('');
  const [Joueur2, setJoueur2] = useState('');
  const [Joueur3, setJoueur3] = useState('');
  const [Joueur4, setJoueur4] = useState('');
  const [Joueur5, setJoueur5] = useState('');
  const [Joueur6, setJoueur6] = useState('');
  const [Joueur7, setJoueur7] = useState('');
  const [Joueur8, setJoueur8] = useState('');

  //déclaration des points
  const [Points1_1, setPoints1_1] = useState('');
  const [Points1_2, setPoints1_2] = useState('');
  const [Points2_1, setPoints2_1] = useState('');
  const [Points2_2, setPoints2_2] = useState('');
  const [Points3_1, setPoints3_1] = useState('');
  const [Points3_2, setPoints3_2] = useState('');
  const [Points4_1, setPoints4_1] = useState('');
  const [Points4_2, setPoints4_2] = useState('');
  const [Points5_1, setPoints5_1] = useState('');
  const [Points5_2, setPoints5_2] = useState('');
  const [Points6_1, setPoints6_1] = useState('');
  const [Points6_2, setPoints6_2] = useState('');

  const game2 = {
    id: "2",
    name: "Quarts de finale",
    scheduled: Number(new Date()),
    sides: {
      home: {
        team: {
          id: "10",
          name: Joueur1
        },
        score: {
          score: Points1_1
        }
      },
      visitor: {
        team: {
          id: "13",
          name: Joueur4
        },
        score: {
          score: Points1_2
        }
      }
    }
  };
  const game3 = {
    id: "3",
    name: "Quarts de finale",
    scheduled: Number(new Date()),
    sides: {
      home: {
        team: {
          id: "11",
          name: Joueur2
        },
        score: {
          score: Points2_1
        }
      },
      visitor: {
        team: {
          id: "12",
          name: Joueur3
        },
        score: {
          score: Points2_2
        }
      }
    }
  };
  const game1 = {
    id: "1",
    name: "Demi-finale",
    scheduled: Number(new Date()),
    sides: {
      home: {
        team: {
          id: "10",
          name: Joueur1
        },
        score: {
          score: Points3_1
        },
        seed: {
          displayName: "A1",
          rank: 1,
          sourceGame: game2,
          sourcePool: {}
        }
      },
      visitor: {
        team: {
          id: "11",
          name: Joueur2
        },
        score: {
          score: Points3_2
        },
        seed: {
          displayName: "A2",
          rank: 1,
          sourceGame: game3,
          sourcePool: {}
        }
      }
    }
  };
  const game4 = {
    id: "2",
    name: "Quarts de finale",
    scheduled: Number(new Date()),
    sides: {
      home: {
        team: {
          id: "14",
          name: Joueur5
        },
        score: {
          score: Points4_1
        }
      },
      visitor: {
        team: {
          id: "16",
          name: Joueur7
        },
        score: {
          score: Points4_2
        }
      }
    }
  };
  const game5 = {
    id: "3",
    name: "Quarts de finale",
    scheduled: Number(new Date()),
    sides: {
      home: {
        team: {
          id: "15",
          name: Joueur6
        },
        score: {
          score: Points5_1
        }
      },
      visitor: {
        team: {
          id: "17",
          name: Joueur8
        },
        score: {
          score: Points5_2
        }
      }
    }
  };
  const game6 = {
    id: "1",
    name: "Demi-finale",
    scheduled: Number(new Date()),
    sides: {
      home: {
        team: {
          id: "14",
          name: Joueur5
        },
        score: {
          score: Points6_1
        },
        seed: {
          displayName: "A1",
          rank: 1,
          sourceGame: game4,
          sourcePool: {}
        }
      },
      visitor: {
        team: {
          id: "17",
          name: Joueur8
        },
        score: {
          score: Points6_2
        },
        seed: {
          displayName: "A2",
          rank: 1,
          sourceGame: game5,
          sourcePool: {}
        }
      }
    }
  };
  const game7 = {
    id: "1",
    name: "Finale",
    scheduled: Number(new Date()),
    sides: {
      home: {
        team: {
          id: "10",
          name: Joueur1
        },
        score: {
          score: 3
        },
        seed: {
          displayName: "A1",
          rank: 1,
          sourceGame: game1,
          sourcePool: {}
        }
      },
      visitor: {
        team: {
          id: "17",
          name: Joueur8
        },
        score: {
          score: 0
        },
        seed: {
          displayName: "A2",
          rank: 1,
          sourceGame: game6,
          sourcePool: {}
        }
      }
    }
  };


  const games = [
    {
      id: "1",
      name: "semi-finals",
      scheduled: Number(new Date()),
      sides: {
        home: {
          team: {
            id: "10",
            name: "Joueur 1"
          },
          score: {
            score: 2
          },
          seed: {
            displayName: "A1",
            rank: 1,
            sourceGame: game2,
            sourcePool: {}
          }
        },
        visitor: {
          team: {
            id: "11",
            name: "Joueur 2"
          },
          score: {
            score: 3
          },
          seed: {
            displayName: "A2",
            rank: 1,
            sourceGame: game3,
            sourcePool: {}
          }
        }
      }
    },
    {
      id: "1",
      name: "semi-finals",
      scheduled: Number(new Date()),
      sides: {
        home: {
          team: {
            id: "10",
            name: "Joueur 1"
          },
          score: {
            score: 2
          },
          seed: {
            displayName: "A1",
            rank: 1,
            sourceGame: game2,
            sourcePool: {}
          }
        },
        visitor: {
          team: {
            id: "11",
            name: "Joueur 2"
          },
          score: {
            score: 3
          },
          seed: {
            displayName: "A2",
            rank: 1,
            sourceGame: game3,
            sourcePool: {}
          }
        }
      }
    },
    {
      id: "1",
      name: "Quarts de finale",
      scheduled: Number(new Date()),
      sides: {
        home: {
          team: {
            id: "15",
            name: "Joueur 6"
          },
          score: {
            score: 4
          },
          seed: {
            displayName: "A1",
            rank: 1,
            sourceGame: game4,
            sourcePool: {}
          }
        },
        visitor: {
          team: {
            id: "17",
            name: "Joueur 8"
          },
          score: {
            score: 2
          },
          seed: {
            displayName: "A2",
            rank: 1,
            sourceGame: game5,
            sourcePool: {}
          }
        }
      }
    },
    {
      id: "1",
      name: "Quarts de finale",
      scheduled: Number(new Date()),
      sides: {
        home: {
          team: {
            id: "15",
            name: "Joueur 6"
          },
          score: {
            score: 4
          },
          seed: {
            displayName: "A1",
            rank: 1,
            sourceGame: game4,
            sourcePool: {}
          }
        },
        visitor: {
          team: {
            id: "17",
            name: "Joueur 8"
          },
          score: {
            score: 2
          },
          seed: {
            displayName: "A2",
            rank: 1,
            sourceGame: game5,
            sourcePool: {}
          }
        }
      }
    },
    {
      id: "2",
      name: "Finale",
      scheduled: Number(new Date()),
      sides: {
        home: {
          team: {
            id: "15",
            name: "Joueur 1"
          },
          score: {
            score: 3
          },
          seed: {
            displayName: "A1",
            rank: 2,
            sourceGame: game1,
            sourcePool: {}
          }
        },
        visitor: {
          team: {
            id: "17",
            name: "Joueur 8"
          },
          score: {
            score: 0
          },
          seed: {
            displayName: "A2",
            rank: 2,
            sourceGame: game6,
            sourcePool: {}
          }
        }
      }
    },

  ];

  return (
    <>
      <h2>Bracket actuel</h2>
      <h3>Noms des joueurs</h3>
      <input type="text" placeholder="Joueur 1" onChange={e => setJoueur1(e.target.value)} />
      <input type="text" placeholder="Joueur 2" onChange={e => setJoueur2(e.target.value)} />
      <input type="text" placeholder="Joueur 3" onChange={e => setJoueur3(e.target.value)} />
      <input type="text" placeholder="Joueur 4" onChange={e => setJoueur4(e.target.value)} />
      <br/>
      <input type="text" placeholder="Joueur 5" onChange={e => setJoueur5(e.target.value)} />
      <input type="text" placeholder="Joueur 6" onChange={e => setJoueur6(e.target.value)} />
      <input type="text" placeholder="Joueur 7" onChange={e => setJoueur7(e.target.value)} />
      <input type="text" placeholder="Joueur 8" onChange={e => setJoueur8(e.target.value)} />
      <br/>
      <h3>Paramétrer les points</h3>
      <div>
        Match 1 
        <input type="text" onChange={e => setPoints1_1(e.target.value)} />
        <input type="text" onChange={e => setPoints1_2(e.target.value)} />
        <br/>
        Match 2
        <input type="text" onChange={e => setPoints2_1(e.target.value)} />
        <input type="text" onChange={e => setPoints2_2(e.target.value)} />
        <br/>
        Match 3
        <input type="text" onChange={e => setPoints3_1(e.target.value)} />
        <input type="text" onChange={e => setPoints3_2(e.target.value)} />
        <br/>
        Match 4
        <input type="text" onChange={e => setPoints4_1(e.target.value)} />
        <input type="text" onChange={e => setPoints4_2(e.target.value)} />
        <br/>
        Match 5
        <input type="text" onChange={e => setPoints5_1(e.target.value)} />
        <input type="text" onChange={e => setPoints5_2(e.target.value)} />
        <br/>
        Match 6
        <input type="text" onChange={e => setPoints6_1(e.target.value)} />
        <input type="text" onChange={e => setPoints6_2(e.target.value)} />
      </div>
      <br/>
      <Bracket game={game1} />
      <br/>
      <Bracket game={game6} />
      <BracketGenerator game={games} />
    </>
  );
}
