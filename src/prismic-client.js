import Prismic from 'prismic-javascript';

const apiEndpoint = 'https://testsite89.cdn.prismic.io/api/v2';
const accessToken = '';

export const client = Prismic.client(apiEndpoint, { accessToken });
