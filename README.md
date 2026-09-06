# Pro sidebar template

Responsive layout with advanced sidebar menu built with SCSS and vanilla Javascript

## Demo

[See it live](https://azouaoui-med.github.io/pro-sidebar-template)

## Screenshot

![Pro Sidebar](https://user-images.githubusercontent.com/25878302/215290325-e5c6043b-4411-404c-83b8-dcc227df70ad.jpg)

## Installation

```
# clone the repo
$ git clone https://github.com/azouaoui-med/pro-sidebar-template.git my-project

# go into app's directory
$ cd my-project

# install app's dependencies
$ yarn install

```

## Usage

```
# serve with hot reload at localhost:8080
$ yarn start

# build app for production
$ yarn build

```

## Documentation

### Layout

The layout for this template is based on [css pro layout](https://github.com/azouaoui-med/css-pro-layout) package, please refer to the [docs](https://azouaoui-med.github.io/css-pro-layout/) for more information

### Sidebar

Responsive navigation element for building vertical menu items

**Sidebar Image**

Adding background image requires adding `.has-bg-image` class to sidebar component, and the image needs to be inside `.image-wrapper` component

```html
<aside id="sidebar" class="sidebar break-point-lg has-bg-image">
  <div class="image-wrapper">
    <img src="assets/images/sidebar-bg.jpg" alt="sidebar background" />
  </div>
  <div class="sidebar-layout">
    <!-- Content here -->
  </div>
</aside>
```

### Sidebar Layout

Sidebar comes with layout support for better organization of the inner structure

```html
<aside id="sidebar" class="sidebar break-point-lg">
  <div class="sidebar-layout">
    <div class="sidebar-header">
      <!-- Header content here -->
    </div>
    <div class="sidebar-content">
      <!-- Content here -->
    </div>
    <div class="sidebar-footer">
      <!-- Footer content here -->
    </div>
  </div>
</aside>
```

More on the sidebar [here](https://azouaoui-med.github.io/css-pro-layout/docs/reference/sidebar)

### Menu

Wrapper component that groups all menu items

```html
<nav class="menu">
  <!-- Content here -->
</nav>
```

**Open current submenu**

Use `.open-current-submenu` to enable opening only one submenu component at a time

```html
<nav class="menu open-current-submenu">
  <!-- Content here -->
</nav>
```

**Icon shape**

A set of classes are provided to restyle menu icons

- `.icon-shape-square`
- `.icon-shape-rounded`
- `.icon-shape-circle`

```html
<nav class="menu icon-shape-circle">
  <!-- Content here -->
</nav>
```

### Menu Item

Building menu item requires having `.menu-item` class in the wrapper and `.menu-title` for the text

```html
<nav class="menu">
  <ul>
    <li class="menu-item">
      <a href="#">
        <span class="menu-title">menu text</span>
      </a>
    </li>
    <!-- More menu items -->
  </ul>
</nav>
```

**Menu Icon**

Use `.menu-icon` to add an icon to menu items

```html
<nav class="menu">
  <ul>
    <li class="menu-item">
      <a href="#">
        <span class="menu-icon">
          <i class="ri-service-fill"></i>
        </span>
        <span class="menu-title">menu text</span>
      </a>
    </li>
    <!-- More menu items -->
  </ul>
</nav>
```

**Prefix & Suffix**

Menu item also supports having prefix and suffix components

```html
<nav class="menu">
  <ul>
    <li class="menu-item">
      <a href="#">
        <span class="menu-icon">
          <i class="ri-service-fill"></i>
        </span>
        <span class="menu-prefix">prefix</span>
        <span class="menu-title">menu text</span>
        <span class="menu-suffix">suffix</span>
      </a>
    </li>
    <!-- More menu items -->
  </ul>
</nav>
```

### Sub Menu

Add `.sub-menu` class to menu item and create a wrapper component with `sub-menu-list` class to group sub menu items

> Its possible to have unlimited nesting menu items

```html
<nav class="menu">
  <ul>
    <li class="menu-item sub-menu">
      <a href="#">
        <span class="menu-title">menu text</span>
      </a>
      <div class="sub-menu-list">
        <li class="menu-item">
          <a href="#">
            <span class="menu-title">sub menu text</span>
          </a>
        </li>
        <!-- More sub menu items -->
      </div>
    </li>
    <!-- More menu items -->
  </ul>
</nav>
```

**Open default**

Use `.open` class to have sub menu expanded by default

```html
<nav class="menu">
  <ul>
    <li class="menu-item sub-menu open">
      <a href="#">
        <span class="menu-title">menu text</span>
      </a>
      <div class="sub-menu-list">
        <li class="menu-item">
          <a href="#">
            <span class="menu-title">sub menu text</span>
          </a>
        </li>
        <!-- More sub menu items -->
      </div>
    </li>
    <!-- More menu items -->
  </ul>
</nav>
```

### Customization

Update SCSS variables in `src/styles/_variables.scss` to customize the template

```scss
$text-color: #b3b8d4;
$secondary-text-color: #dee2ec;
$bg-color: #0c1e35;
$secondary-bg-color: #0b1a2c;
$border-color: rgba(#535d7d, 0.3);
$sidebar-header-height: 64px;
$sidebar-footer-height: 64px;
```

## License

This code is released under the [MIT](https://github.com/azouaoui-med/pro-sidebar-template/blob/gh-pages/LICENSE) license.


## 🌐 Web Resources & Interactive Index
- [KNIFE MADNESS](https://studyquests.github.io/knife-madness.html)
- [PRIVACY](https://cryptotify9.onrender.com/privacy.html)
- [SHADOWMAN RUNNER](https://themindzone.pages.dev/shadowman-runner.html)
- [INDEX27](https://frskillcrafts.pages.dev/index27.html)
- [CATEGORY ANIMAL216](https://thelearnquesters.pages.dev/category-animal216.html)
- [STICKMAN FIGHT PRO](https://thelearnquesters.pages.dev/stickman-fight-pro.html)
- [ORGANIZE IT](https://studyquests.github.io/organize-it.html)
- [STRIKE BREAKOUT](https://studyplaying.github.io/strike-breakout.html)
- [CATEGORY 2048](https://thequizzone.pages.dev/category-2048.html)
- [PET SIMULATOR](https://learnquester.github.io/pet-simulator.html)
- [DIAMOND MOSAIC](https://learnquester.github.io/diamond-mosaic.html)
- [CATEGORY MOBILE2 095](https://studyplayings.web.app/category-mobile2-095.html)
- [GARTEN OF BANBAN 1 ESCAPE](https://learnquester.github.io/garten-of-banban-1-escape.html)
- [SLICER DUO](https://thelearnquesters.pages.dev/slicer-duo.html)
- [LIGHT BULB PUZZLE](https://studyplaying.github.io/light-bulb-puzzle.html)
- [CATEGORY DRESS UP](https://thelearnquesters.pages.dev/category-dress-up.html)
- [INDEX21](https://studyplaying.github.io/index21.html)
- [ZOMBIES WEAPON MERGE 4](https://studyquesthub.web.app/zombies-weapon-merge-4.html)
- [CATEGORY CASUAL 2](https://thelearnquesters.pages.dev/category-casual-2.html)
- [BATTLE OF TANK STEEL](https://thelearnquesters.pages.dev/battle-of-tank-steel.html)
- [DESSERT DIY](https://studyquesthub.web.app/dessert-diy.html)
- [CATEGORY PLATFORM260](https://studyquests.pages.dev/category-platform260.html)
- [ASTRAL ESCAPE](https://thelearnquesters.pages.dev/astral-escape.html)
- [BLOXDHOP IO](https://studyquests.pages.dev/bloxdhop-io.html)
- [ONE LINE](https://studyquests.pages.dev/one-line.html)
- [TRUE LOVE CALCULATOR NZW](https://thequizzone.pages.dev/true-love-calculator-nzw.html)
- [MIRRORS PUZZLE](https://learnquester.github.io/mirrors-puzzle.html)
- [BULLET SUPERHERO](https://thelearnquesters.pages.dev/bullet-superhero.html)
- [REAL FREEKICK 3D](https://thelearnquesters.pages.dev/real-freekick-3d.html)
- [CATEGORY FPS](https://studyplaying.github.io/category-fps.html)
- [INDEX9](https://thequizzone.pages.dev/index9.html)
- [HOARD MASTER ONLINE](https://thelearnquesters.pages.dev/hoard-master-online.html)
- [MEATRIDER](https://thelearnquesters.pages.dev/meatrider.html)
- [CATEGORY MERGE GAMES](https://thequizzone.pages.dev/category-merge-games.html)
- [STICKMAN MINERS WARS](https://learnquester.github.io/stickman-miners-wars.html)
- [CATEGORY 2D1 070](https://studyplayings.web.app/category-2d1-070.html)
- [TAILOR STYLIST FASHION DIARY](https://studyplayings.web.app/tailor-stylist-fashion-diary.html)
- [ROYAL REBELLION PUNK MAGIC](https://studyquests.pages.dev/royal-rebellion-punk-magic.html)
- [ZIP ZAP](https://studyquesthub.web.app/zip-zap.html)
- [CATEGORY THINKY 2](https://studyplaying.github.io/category-thinky-2.html)
- [GATE HEROES BATTLE](https://thelearnquesters.pages.dev/gate-heroes-battle.html)
- [FISH SORT](https://studyquests.pages.dev/fish-sort.html)
- [CATEGORY CONTROLLER 2](https://studyplayings.pages.dev/category-controller-2.html)
- [COZY KITCHEN MERGE](https://thelearnquesters.pages.dev/cozy-kitchen-merge.html)
- [MOTO STUNT BIKER](https://thelearnquesters.pages.dev/moto-stunt-biker.html)
- [BLOCKS BREAKER](https://studyplayings.web.app/blocks-breaker.html)
- [BALLPOINT](https://thelearnquesters.pages.dev/ballpoint.html)
- [HALLOWEEN STICKMAN 2](https://thelearnquesters.pages.dev/halloween-stickman-2.html)
- [CATEGORY PUZZLE 3](https://studyplaying.github.io/category-puzzle-3.html)
- [FROGGY HOP](https://thelearnquesters.pages.dev/froggy-hop.html)
- [TOWER DEFENDERS](https://thelearnquesters.pages.dev/tower-defenders.html)
- [KINGDOM MATCH](https://learnquester.github.io/kingdom-match.html)
- [MY DOGY VIRTUAL PET](https://thelearnquester.web.app/my-dogy-virtual-pet.html)
- [SWORD RUN 3D](https://studyquesthub.web.app/sword-run-3d.html)
- [CATEGORY SIDE SCROLLING184](https://thelearnquester.web.app/category-side-scrolling184.html)
- [PEOPLE PLAYGROUND RAGDOLL BATTLE](https://learnquester.github.io/people-playground-ragdoll-battle.html)
- [BRAWL STARS BATTLE](https://studyplaying.github.io/brawl-stars-battle.html)
- [SLAP MAN](https://studyplayings.web.app/slap-man.html)
- [CATEGORY UNBLOCKED](https://learnquester.pages.dev/category-unblocked.html)
- [MY KITTIES CATWORLD](https://thelearnquesters.pages.dev/my-kitties-catworld.html)
- [MATCH TILE ROYAL FAMILY](https://thelearnquester.web.app/match-tile-royal-family.html)
- [LABUBA MERGE](https://learnquesters.pages.dev/labuba-merge.html)
- [SNOWBOARD GAME PARTY](https://studyquests.pages.dev/snowboard-game-party.html)
- [ALPHABET LORE MAZE](https://studyplaying.github.io/alphabet-lore-maze.html)
- [CATEGORY FASHION105](https://thequizzone.pages.dev/category-fashion105.html)
- [CATEGORY IDLE445](https://thelearnquesters.pages.dev/category-idle445.html)
- [STICKMAN PUNISHMENT](https://learnquesters.pages.dev/stickman-punishment.html)
- [1945 AIR FORCE AIRPLANE](https://studyquests.pages.dev/1945-air-force-airplane.html)
- [FROGGY HOP](https://studyquesthub.web.app/froggy-hop.html)
- [POP PARTY SUIKA WATERMELON](https://studyplayings.web.app/pop-party-suika-watermelon.html)
- [INDEX11](https://studyquests.pages.dev/index11.html)
- [GET A COOL GUN](https://studyplayings.pages.dev/get-a-cool-gun.html)
- [GAS STATION JUNKYARD TYCOON](https://studyplaying.github.io/gas-station-junkyard-tycoon.html)
- [FIND THE FROG HIDDEN OBJECTS](https://thelearnquesters.pages.dev/find-the-frog-hidden-objects.html)
- [CATEGORY ALIEN34](https://thelearnquesters.pages.dev/category-alien34.html)
- [FACE CHANGES](https://studyplaying.github.io/face-changes.html)
- [CHAIN CUBE 2048 3D MERGE GAME](https://thelearnquesters.pages.dev/chain-cube-2048-3d-merge-game.html)
- [CATEGORY FLASH](https://thelearnquester.web.app/category-flash.html)
- [CATEGORY MINIGAMES29](https://thelearnquesters.pages.dev/category-minigames29.html)
- [MINI GRAND THEFT CITY](https://studyplayings.web.app/mini-grand-theft-city.html)
- [BLANKETS](https://studyplayings.web.app/blankets.html)
- [CATEGORY SOLITAIRE27](https://thelearnquester.web.app/category-solitaire27.html)
- [BEACH CLUB](https://thelearnquesters.pages.dev/beach-club.html)
- [TCG CARD CLICKER](https://studyplayings.pages.dev/tcg-card-clicker.html)
- [WORD RIVERS](https://studyplayings.web.app/word-rivers.html)
- [CONTAINER SORT PUZZLE](https://thelearnquesters.pages.dev/container-sort-puzzle.html)
- [SKYHILL ESCAPE FROM THE SKYSCRAPER](https://learnquesters.pages.dev/skyhill-escape-from-the-skyscraper.html)
- [CATEGORY DIRT BIKE](https://studyquests.pages.dev/category-dirt-bike.html)
- [CATEGORY HALLOWEEN45](https://thequizzone.pages.dev/category-halloween45.html)
- [DAILY JEWELS BLITZ MAHJONG](https://learnquester.pages.dev/daily-jewels-blitz-mahjong.html)
- [DREAM PET HOTEL](https://studyquests.pages.dev/dream-pet-hotel.html)
- [NUBIK CREATE YOUR PLACE](https://studyplaying.github.io/nubik-create-your-place.html)
- [MAX CRUSHER CRAZY DESTRUCTION AND CAR CRASHES](https://studyquests.pages.dev/max-crusher-crazy-destruction-and-car-crashes.html)
- [ROAD RACE 3D](https://thelearnquesters.pages.dev/road-race-3d.html)
- [100 DOORS CHALLENGE](https://thelearnquesters.pages.dev/100-doors-challenge.html)
- [CATEGORY WAR137](https://learnquesters.pages.dev/category-war137.html)
- [CATEGORY STICKMAN](https://thelearnquester.web.app/category-stickman.html)
- [KITKAT PUZZLE](https://thelearnquesters.pages.dev/kitkat-puzzle.html)
- [ARCHERS RANDOM](https://thelearnquesters.pages.dev/archers-random.html)
- [CLEANING SIMULATOR](https://studyplayings.pages.dev/cleaning-simulator.html)
- [MOSQUITO BITE 3D](https://learnquesters.pages.dev/mosquito-bite-3d.html)
- [MONSTER SCHOOL VS SIREN HEAD](https://thelearnquester.web.app/monster-school-vs-siren-head.html)
- [FASHION BATTLE FOR SURVIVAL](https://learnquester.pages.dev/fashion-battle-for-survival.html)
- [CATEGORY LIGHTSPEED FILTER](https://thelearnquester.web.app/category-lightspeed-filter.html)
- [CATEGORY MOBILE2 112 2](https://studyplaying.github.io/category-mobile2-112-2.html)
- [INDEX36](https://thelearnquesters.pages.dev/index36.html)
- [RELAXING CUBES AND CAMPFIRE](https://learnquesters.pages.dev/relaxing-cubes-and-campfire.html)
- [DRIVERZ ED](https://studyplaying.github.io/driverz-ed.html)
- [CATEGORY OBSTACLE299](https://studyplaying.github.io/category-obstacle299.html)
- [CATEGORY MANAGEMENT](https://thelearnquesters.pages.dev/category-management.html)
- [CATEGORY STRATEGY](https://thelearnquester.web.app/category-strategy.html)
- [FOREST SURVIVOR ROUGELIKE](https://studyquests.pages.dev/forest-survivor-rougelike.html)
- [SUPER SWING](https://studyquests.pages.dev/super-swing.html)
- [CATEGORY DRESS UP GAMES](https://thelearnquesters.pages.dev/category-dress-up-games.html)
- [CATEGORY POINT AND CLICK124](https://thelearnquester.web.app/category-point-and-click124.html)
- [FLOWER BLOCK](https://learnquester.github.io/flower-block.html)
- [SHANGHAI CHEF](https://studyplayings.web.app/shanghai-chef.html)
- [WOOP CRAWL UP](https://studyplayings.pages.dev/woop-crawl-up.html)
- [PING PONG AIR](https://thelearnquesters.pages.dev/ping-pong-air.html)
- [MONEY FACTORY EARN A BILLION](https://thelearnquesters.pages.dev/money-factory-earn-a-billion.html)
- [OBSTACLE CAR DRIVING](https://learnquesters.pages.dev/obstacle-car-driving.html)
- [MOTO ATTACK BIKE RACING](https://thelearnquesters.pages.dev/moto-attack-bike-racing.html)
- [CATEGORY PUZZLE 9](https://studyplaying.github.io/category-puzzle-9.html)
- [ATLANTIC SKY HUNTER XTREME](https://learnquester.github.io/atlantic-sky-hunter-xtreme.html)
- [IDLE TRADE ISLE](https://learnquester.pages.dev/idle-trade-isle.html)
- [CATEGORY SORTING](https://thelearnquester.web.app/category-sorting.html)
- [CATEGORY PUZZLE 5](https://studyplayings.pages.dev/category-puzzle-5.html)
- [CUBE TO HOLE PUZZLE](https://studyplaying.github.io/cube-to-hole-puzzle.html)
- [MYSTERIOUS FAMILIARS ENCHANTED BESTIARY](https://studyplayings.pages.dev/mysterious-familiars-enchanted-bestiary.html)
- [SKYSCRAPER TO THE SKY](https://studyquesthub.web.app/skyscraper-to-the-sky.html)
