# rejseplanen-stog-card
Lovelace card for listing departures from Rejseplanen sensors, in the style of S-Tog departure boards.

This works with the [Rejseplanen sensor](https://www.home-assistant.io/components/rejseplanen/) included in Home Assistant.

I've tried to add as many styles for different transit types and routes as I could find, but please let me know if any are missing.

![Example](https://raw.githubusercontent.com/DarkFox/rejseplanen-stog-card/main/rejseplanen-stog-card-example.png)

### Setup

Link `rejseplanen-stog-card` inside your configuration:

```yaml
resources:
  url: /hacsfiles/rejseplanen-stog-card/rejseplanen-stog-card.js
  type: js
```
## Configuration

Add a custom element in your `ui-lovelace.yaml`

|         Name        |  Type   |    Default   |       Supported options        | Description |
| ------------------- | ------- | ------------ | ------------------------------ | ----------- |
| type                | string  | **Required** | `custom:rejseplanen-stog-card` | Type of the card |
| entity              | string  | **Required** | `sensor.rejseplanen`           | entity_id |
| max_entries         | number  | `2`          | any number                     | Limit number of departures shown |
| show_scheduled_time | boolean | `false`      | `true`|`false`                 | Show the scheduled departure time instead of a countdown in minutes |


**Example:**

```yaml
      - type: custom:rejseplanen-stog-card
        entity: sensor.rejseplanen
        max_entries: 5 # Optional
```

## Credits

Based on [cgtobi](https://github.com/cgtobi) and [DavidMStraub](https://github.com/DavidMStraub)'s work: https://github.com/cgtobi/rmv-card
