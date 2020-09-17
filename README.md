# rejseplanen-stog-card
Lovelace card for listing departures from Rejseplanen sensors

This works with the [Rejseplanen sensor](https://www.home-assistant.io/components/rejseplanen/) included in Home Assistant.

I've tried to add as many styles for different transit types and routes as I could find, but please let me know if any are missing.

![Example](https://raw.githubusercontent.com/DarkFox/rejseplanen-stog-card/master/rejseplanen-stog-card-example.png)

# Installation

## HACS

### Step 1

Add "DarkFox/rejseplanen-stog-card" as a custom repository with the type "plugin" in HACS Settings, then click install.

### Step 2

Link `rejseplanen-stog-card` inside you `ui-lovelace.yaml`.

```yaml
resources:
  - url: /community_plugin/rejseplanen-stog-card/rejseplanen-stog-card.js
    type: js
```

## Manual installation

### Step 1

Install `rejseplanen-stog-card` by copying `rejseplanen-stog-card.js` from this repo to `<config directory>/www/rejseplanen-stog-card.js` of your Home Assistant instance.

**Example:**

```bash
wget https://github.com/DarkFox/rejseplanen-stog-card/raw/master/rejseplanen-stog-card.js
mv rejseplanen-stog-card.js ~/.homeassistant/www/
```

### Step 2

Link `rejseplanen-stog-card` inside you `ui-lovelace.yaml`.

```yaml
resources:
  - url: /local/rejseplanen-stog-card.js?v=0
    type: js
```

## Configuration

Add a custom element in your `ui-lovelace.yaml`

**Example:**

```yaml
      - type: "custom:rejseplanen-stog-card"
        entity: sensor.rejseplanen
        max_entries: 5 # Optional
```


## Credits

Based on [cgtobi](https://github.com/cgtobi) and [DavidMStraub](https://github.com/DavidMStraub)'s work: https://github.com/cgtobi/rmv-card
