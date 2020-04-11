const recipes = [
  {
    recipeTitle: 'Chocolate Lava Cake for Two',
    recipeDesc: 'For a *special* night in.',
    recipeUrl:
      'https://cooking.nytimes.com/recipes/1019957-chocolate-lava-cake-for-two',
    imageUrl:
      'https://static01.nyt.com/images/2019/02/11/dining/11molten-lava-cake/ya-molten-lava-cake-articleLarge.jpg',
  },
  {
    recipeTitle: 'Oven-Roasted Chicken Shawarma',
    recipeDesc:
      'Super easy dinner — best accompanied with Trader Joe’s frozen falafel and a healthy glass of wine.',
    recipeUrl:
      'https://cooking.nytimes.com/recipes/1017161-oven-roasted-chicken-shawarma',
    imageUrl:
      'https://static01.nyt.com/images/2016/06/06/dining/06COOKING-ROASTCHICKSHAWARM2/06COOKING-ROASTCHICKSHAWARM2-articleLarge.jpg',
  },
  {
    recipeTitle: 'Salmon en Papillote (Salmon in Parchment)',
    recipeDesc:
      'For when you’re cooking to show off but not trying to put that much effort in.',
    recipeUrl:
      'https://cooking.nytimes.com/recipes/1019057-salmon-en-papillote-salmon-in-parchment',
    imageUrl:
      'https://static01.nyt.com/images/2015/12/29/dining/29salmon-19/29salmon-19-articleLarge.jpg',
  },
  {
    recipeTitle: 'Deep Dish Honey Apple Galette',
    recipeDesc: 'A big time commitment but boy is she worth it.',
    recipeUrl:
      'https://cooking.nytimes.com/recipes/1020607-deep-dish-honey-apple-galette',
    imageUrl:
      'https://static01.nyt.com/images/2019/11/13/dining/11Romanrex6/merlin_161933682_c2bd8537-de78-4ada-bea6-920a330971a5-articleLarge.jpg',
  },
  {
    recipeTitle: 'One-Pot Turmeric Coconut Rice With Greens',
    recipeDesc:
      'One of my favorite weeknight meals — made even better topped with a soft boiled egg or pan fried white fish.',
    recipeUrl:
      'https://cooking.nytimes.com/recipes/1019920-one-pot-turmeric-coconut-rice-with-green',
    imageUrl:
      'https://static01.nyt.com/images/2019/01/31/dining/as-yellow-coconut-rice/merlin_149991612_12dbd842-8c7e-4719-b321-7105ba358eb5-articleLarge.jpg',
  },
  {
    recipeTitle: 'Simple Crusty Bread',
    recipeDesc: 'Literally so easy. Fool proof bread.',
    recipeUrl:
      'https://cooking.nytimes.com/recipes/1018203-simple-crusty-bread',
    imageUrl:
      'https://static01.nyt.com/images/2017/08/08/insider/simple-crusty-bread/simple-crusty-bread-articleLarge.jpg',
  },
  {
    recipeTitle: 'Roasted Brussels Sprouts With Garlic',
    recipeDesc: 'My Thanksgiving go-to.',
    recipeUrl:
      'https://cooking.nytimes.com/recipes/1890-roasted-brussels-sprouts-with-garlic',
    imageUrl:
      'https://static01.nyt.com/images/2014/04/29/dining/Roasted-Brussels-Sprouts/Roasted-Brussels-Sprouts-articleLarge-v3.jpg',
  },
  {
    recipeTitle: 'Crisp Gnocchi With Brussels Sprouts and Brown Butter',
    recipeDesc:
      'Probably the easiest recipe with the biggest pay off. Chewy gnocchi = best gnocchi.',
    recipeUrl:
      'https://cooking.nytimes.com/recipes/1020453-crisp-gnocchi-with-brussels-sprouts-and-brown-butter',
    imageUrl:
      'https://static01.nyt.com/images/2019/09/10/dining/as-crisp-gnocchi-with-brussels-sprouts/as-crisp-gnocchi-with-brussels-sprouts-articleLarge.jpg',
  },
  {
    recipeTitle: 'Quick Lamb Ragù',
    recipeDesc:
      'Pair it with the chocolate lava cakes and you’ve got a good damn date night.',
    recipeUrl: 'https://cooking.nytimes.com/recipes/1020022-quick-lamb-ragu',
    imageUrl:
      'https://static01.nyt.com/images/2019/02/20/dining/20Romanrex/merlin_147497019_27213a02-49d8-48e8-94c8-e5ecb5894970-articleLarge.jpg',
  },
  {
    recipeTitle: 'Salted Chocolate Chunk Shortbread Cookies',
    recipeDesc: 'Because obviously.',
    recipeUrl:
      'https://cooking.nytimes.com/recipes/1019152-salted-chocolate-chunk-shortbread-cookies',
    imageUrl:
      'https://static01.nyt.com/images/2018/12/12/dining/16COOKING-SHORTBREADCOOKIES3/16COOKING-SHORTBREADCOOKIES3-articleLarge.jpg',
  },
  {
    recipeTitle: 'Spiced Chickpea Stew With Coconut and Turmeric',
    recipeDesc: 'You know her, you love her.',
    recipeUrl:
      'https://cooking.nytimes.com/recipes/1019772-spiced-chickpea-stew-with-coconut-and-turmeric',
    imageUrl:
      'https://static01.nyt.com/images/2018/11/28/dining/28Romanrex1/merlin_143092557_a19cb00a-d1f1-4d42-83be-e4ac865d2f96-articleLarge.jpg',
  },
  {
    recipeTitle: 'Old-Fashioned Beef Stew',
    recipeDesc:
      'A labor of love. After cooking the meat, add onions and garlic to saute - then tomato paste and cook until it’s a nice rust color. Deglaze with a nice red wine then proceed with the recipe!',
    recipeUrl:
      'https://cooking.nytimes.com/recipes/4735-old-fashioned-beef-stew',
    imageUrl:
      'https://static01.nyt.com/images/2016/11/15/dining/15COOKING-OLD-BEEF-STEW2/15COOKING-OLD-BEEF-STEW2-articleLarge.jpg',
  },
  {
    recipeTitle: 'Low-Commitment Wedding Soup',
    recipeDesc: 'Might be low commitment, but easy to fall in love with.',
    recipeUrl: 'https://www.bonappetit.com/recipe/low-commitment-wedding-soup',
    imageUrl:
      'https://assets.bonappetit.com/photos/5ad51b40d63c0e2f9cf49236/1:1/w_768,h_768,c_limit/italian-wedding-soup.jpg',
  },
  {
    recipeTitle: 'The Best Healthy Turkey Chili',
    recipeDesc: 'Secret ingredient: old bay seasoning. As much as you dare.',
    recipeUrl:
      'https://www.ambitiouskitchen.com/seriously-the-best-healthy-turkey-chili/',
    imageUrl:
      'https://www.ambitiouskitchen.com/wp-content/uploads/2015/10/IMG_6075-Edit-e1549919193723-725x725.jpg',
  },
  {
    recipeTitle: 'Basic Bulgogi',
    recipeDesc: 'Not a fun clean up but so good over sticky rice.',
    recipeUrl: 'https://www.bonappetit.com/recipe/basic-bulgogi',
    imageUrl:
      'https://assets.bonappetit.com/photos/57acd741f1c801a1038bc801/1:1/w_768,h_768,c_limit/basic-bulgogi.jpg',
  },
  {
    recipeTitle: 'Fresh Fettuccine with Beet and Goat Cheese',
    recipeDesc:
      'Don’t knock beets until you try them like this. She’s pretty and she’s tasty.',
    recipeUrl:
      'https://www.blueapron.com/recipes/fresh-fettuccine-pasta-with-chioggia-beet-poppy-seeds-goat-cheese',
    imageUrl:
      'https://media.blueapron.com/recipes/2078/square_newsletter_images/1483999058-4-5819/116-2PV1-fresh-fettuccine-pasta-14120_cropped_square_hi_res.jpg?quality=80&width=600',
  },
  {
    recipeTitle: 'Cinnamon Apple Layer Cake',
    recipeDesc: 'Def a special occasion cake but she’s made to impress.',
    recipeUrl: 'https://www.lifeloveandsugar.com/cinnamon-apple-layer-cake/',
    imageUrl: './img/AppleCake.jpg',
  },
  {
    recipeTitle: 'Chocolate Fudge with Bourbon Sugar',
    recipeDesc: 'If you made this just for the bourbon sugar, it’d be worth it',
    recipeUrl:
      'https://www.bonappetit.com/recipe/chocolate-fudge-with-bourbon-sugar',
    imageUrl:
      'https://assets.bonappetit.com/photos/57ad29d753e63daf11a4dc7e/1:1/w_768,h_768,c_limit/chocolate-fudge-with-bourbon-sugar.jpg',
  },
];

const createRecipeCard = (recipeTitle, recipeDesc, recipeUrl, imageUrl) =>
  `<div class="recipe__card">
    <a target="_blank" href="${recipeUrl}" class="recipe__link--img"
      ><img class="recipe__img" src="${imageUrl}" alt=""
    /></a>
    <a target="_blank" href="${recipeUrl}" class="recipe__link"
      ><h3 class="recipe__title">${recipeTitle}</h3></a
    >
    <p class="recipe__desc">${recipeDesc}</p>
  </div>`;

const recipeContainer = document.getElementById('recipes');

recipes.forEach(({ recipeTitle, recipeDesc, recipeUrl, imageUrl }) => {
  const html = createRecipeCard(recipeTitle, recipeDesc, recipeUrl, imageUrl);
  recipeContainer.insertAdjacentHTML('beforeend', html);
});

// Confetti
(function () {
  // globals
  var canvas;
  var ctx;
  var W;
  var H;
  var mp = 100; //max particles
  var particles = [];
  var angle = 0;
  var tiltAngle = 0;
  var confettiActive = true;
  var animationComplete = true;
  var deactivationTimerHandler;
  var reactivationTimerHandler;
  var animationHandler;

  // objects

  var particleColors = {
    colorOptions: [
      'DodgerBlue',
      'OliveDrab',
      'Gold',
      'pink',
      'SlateBlue',
      'lightblue',
      'Violet',
      'PaleGreen',
      'SteelBlue',
      'SandyBrown',
      'Chocolate',
      'Crimson',
    ],
    colorIndex: 0,
    colorIncrementer: 0,
    colorThreshold: 10,
    getColor: function () {
      if (this.colorIncrementer >= 10) {
        this.colorIncrementer = 0;
        this.colorIndex++;
        if (this.colorIndex >= this.colorOptions.length) {
          this.colorIndex = 0;
        }
      }
      this.colorIncrementer++;
      return this.colorOptions[this.colorIndex];
    },
  };

  function confettiParticle(color) {
    this.x = Math.random() * W; // x-coordinate
    this.y = Math.random() * H - H; //y-coordinate
    this.r = RandomFromTo(10, 30); //radius;
    this.d = Math.random() * mp + 10; //density;
    this.color = color;
    this.tilt = Math.floor(Math.random() * 10) - 10;
    this.tiltAngleIncremental = Math.random() * 0.07 + 0.05;
    this.tiltAngle = 0;

    this.draw = function () {
      ctx.beginPath();
      ctx.lineWidth = this.r / 2;
      ctx.strokeStyle = this.color;
      ctx.moveTo(this.x + this.tilt + this.r / 4, this.y);
      ctx.lineTo(this.x + this.tilt, this.y + this.tilt + this.r / 4);
      return ctx.stroke();
    };
  }

  $(document).ready(function () {
    SetGlobals();
    InitializeButton();
    InitializeConfetti();

    $(window).resize(function () {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
    });
  });

  function InitializeButton() {
    $('#stopButton').click(DeactivateConfetti);
    $('#startButton').click(RestartConfetti);
  }

  function SetGlobals() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;
  }

  function InitializeConfetti() {
    particles = [];
    animationComplete = false;
    for (var i = 0; i < mp; i++) {
      var particleColor = particleColors.getColor();
      particles.push(new confettiParticle(particleColor));
    }
    StartConfetti();
  }

  function Draw() {
    ctx.clearRect(0, 0, W, H);
    var results = [];
    for (var i = 0; i < mp; i++) {
      (function (j) {
        results.push(particles[j].draw());
      })(i);
    }
    Update();

    return results;
  }

  function RandomFromTo(from, to) {
    return Math.floor(Math.random() * (to - from + 1) + from);
  }

  function Update() {
    var remainingFlakes = 0;
    var particle;
    angle += 0.01;
    tiltAngle += 0.1;

    for (var i = 0; i < mp; i++) {
      particle = particles[i];
      if (animationComplete) return;

      if (!confettiActive && particle.y < -15) {
        particle.y = H + 100;
        continue;
      }

      stepParticle(particle, i);

      if (particle.y <= H) {
        remainingFlakes++;
      }
      CheckForReposition(particle, i);
    }

    if (remainingFlakes === 0) {
      StopConfetti();
    }
  }

  function CheckForReposition(particle, index) {
    if (
      (particle.x > W + 20 || particle.x < -20 || particle.y > H) &&
      confettiActive
    ) {
      if (index % 5 > 0 || index % 2 == 0) {
        //66.67% of the flakes
        repositionParticle(
          particle,
          Math.random() * W,
          -10,
          Math.floor(Math.random() * 10) - 20
        );
      } else {
        if (Math.sin(angle) > 0) {
          //Enter from the left
          repositionParticle(
            particle,
            -20,
            Math.random() * H,
            Math.floor(Math.random() * 10) - 20
          );
        } else {
          //Enter from the right
          repositionParticle(
            particle,
            W + 20,
            Math.random() * H,
            Math.floor(Math.random() * 10) - 20
          );
        }
      }
    }
  }
  function stepParticle(particle, particleIndex) {
    particle.tiltAngle += particle.tiltAngleIncremental;
    particle.y += (Math.cos(angle + particle.d) + 3 + particle.r / 2) / 2;
    particle.x += Math.sin(angle);
    particle.tilt = Math.sin(particle.tiltAngle - particleIndex / 3) * 15;
  }

  function repositionParticle(particle, xCoordinate, yCoordinate, tilt) {
    particle.x = xCoordinate;
    particle.y = yCoordinate;
    particle.tilt = tilt;
  }

  function StartConfetti() {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;
    (function animloop() {
      if (animationComplete) return null;
      animationHandler = requestAnimFrame(animloop);
      return Draw();
    })();
  }

  function ClearTimers() {
    clearTimeout(reactivationTimerHandler);
    clearTimeout(animationHandler);
  }

  function DeactivateConfetti() {
    confettiActive = false;
    ClearTimers();
  }

  function StopConfetti() {
    animationComplete = true;
    if (ctx == undefined) return;
    ctx.clearRect(0, 0, W, H);
  }

  function RestartConfetti() {
    ClearTimers();
    StopConfetti();
    reactivationTimerHandler = setTimeout(function () {
      confettiActive = true;
      animationComplete = false;
      InitializeConfetti();
    }, 100);
  }

  window.requestAnimFrame = (function () {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) {
        return window.setTimeout(callback, 1000 / 60);
      }
    );
  })();
})();
