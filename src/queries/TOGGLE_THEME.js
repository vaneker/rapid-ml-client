import gql from 'graphql-tag';

export default gql`
  mutation toggleTheme {
    toggleTheme @client
  }
`;
