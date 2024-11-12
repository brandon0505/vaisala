# StormReport Module

The `StormReport` module is a reusable React component for fetching and displaying weather-related reports based on location, time frame, and event type filters. It leverages configuration parameters for flexible API access, including the ability to dynamically adjust filters and settings.

## Repository Structure

This repository has a two-level folder structure:

- The root of the repository is the `vaisala` folder.
- The main application code is located in the `vaisala-app` subfolder within the repository root.

**Repository URL**: [https://github.com/brandon0505/vaisala.git](https://github.com/brandon0505/vaisala.git)

When cloning this repository, you will receive both the `vaisala` root folder and the `vaisala-app` subfolder.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Props](#props)
- [Usage](#usage)
- [Customization](#customization)
- [Example](#example)
- [Troubleshooting](#troubleshooting)

---

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/brandon0505/vaisala.git
   cd vaisala/vaisala-app
   ```

2. **Install Dependencies**:
   Ensure you have `npm` or `yarn` installed, then run:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. **Set up FontAwesome**:
   Ensure FontAwesome is installed and imported for the icons used in the report cards. You can add it as a dependency if not included:
   ```bash
   npm install --save @fortawesome/react-fontawesome
   ```

---

## Configuration

The `StormReport` module relies on certain configurations for API calls and customizable filters.

### Required Configurations

These props must be provided to the `StormReport` component for it to function properly:

- **client_id**: The unique client ID for API access.
- **client_secret**: The secret key for API access.

### Optional Configurations

- **defaultLocation**: The default location for the report search, specified as a string (e.g., `"New York, NY"` or `"90210"`).
- **defaultTimeFilter**: A default time range, specified as one of the options defined in `TimeFilterConfig` (e.g., `"24H"` or `"7D"`).
- **defaultEventTypes**: An array of default event types, chosen from `EventTypeOptions` (e.g., `["tornado", "flood"]`).

---

## Props

### `StormReportProps`

These props configure the behavior of the `StormReport` component:

| Prop                | Type              | Required | Description                                                |
| ------------------- | ----------------- | -------- | ---------------------------------------------------------- |
| `client_id`         | `string`          | Yes      | Client ID for API authentication                           |
| `client_secret`     | `string`          | Yes      | Client secret for API authentication                       |
| `defaultLocation`   | `string`          | No       | Default location to load initially                         |
| `defaultTimeFilter` | `TimeFilterKeys`  | No       | Default time filter option for reports                     |
| `defaultEventTypes` | `EventTypeKeys[]` | No       | Array of default event types to display in the filter form |

---

## Usage

To integrate the `StormReport` module into your React application:

1. Import the `StormReport` component.
2. Pass in the required `client_id` and `client_secret`.
3. Optionally configure default values for location, time filters, and event types.

```typescript
import React from 'react';
import StormReport from './components/StormReport';

const App = () => {
  return (
    <div className="App">
      <StormReport
        client_id="YOUR_CLIENT_ID"
        client_secret="YOUR_CLIENT_SECRET"
        defaultLocation="Los Angeles, CA"
        defaultTimeFilter="24H"
        defaultEventTypes={["tornado", "hail"]}
      />
    </div>
  );
};

export default App;
```

### Explanation

- **Filters**: After the initial search, adjusting the time filter or event type will automatically trigger a new fetch for updated results.

---

## Customization

The following files allow for further customization and adjustments to the filters and display settings:

- **TimeFilterConfig.ts**: Defines time-based filter options (e.g., `24H`, `48H`) and includes `urlParam` mappings and display names.
- **EventTypeConfig.ts**: Defines event type options (e.g., `tornado`, `hail`) and includes FontAwesome icons, colors, and any labels for observed values.

---

## Example

Here is an example configuration for a `StormReport` with a Los Angeles location and selected tornado and hail filters:

```typescript
<StormReport
  client_id="YOUR_CLIENT_ID"
  client_secret="YOUR_CLIENT_SECRET"
  defaultLocation="Los Angeles, CA"
  defaultTimeFilter="24H"
  defaultEventTypes={["tornado", "hail"]}
/>
```

This configuration allows users to view storm reports for Los Angeles within a 24-hour timeframe, specifically looking for tornado and hail events.

---

## Troubleshooting

- **Missing Data or Icons**: Ensure that `client_id` and `client_secret` are correct and have access to the weather data API.
- **API Errors**: Check the API status and review network requests in the browser's developer tools for more details on any errors.

For further customization or questions, please refer to the project documentation or contact the maintainer.

---

This `StormReport` module is now ready for integration into any React application with the provided API credentials and default configurations.
