module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@react-native-community|@react-native-async-storage/async-storage|@expo/vector-icons|@testing-library/react-native|expo-font|expo-modules-core)/)',
  ],
  setupFiles: [
    './node_modules/react-native-gesture-handler/jestSetup.js',
    './jest/setup.js',
  ],
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
  },
};

