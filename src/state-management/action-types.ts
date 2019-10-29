const typeCache: {
  [ label: string ]: boolean
} = {};

function type<T>(label: T | ''): T {
  if (typeCache[<string>label]) {
    throw new Error(`Action type "${label}" isn't unique`);
  }

  typeCache[<string>label] = true;

  return <T>label;
}

export const ActionTypes = {
  FETCH_ARTICLES: type<'FETCH_ARTICLES'>('FETCH_ARTICLES')
};
