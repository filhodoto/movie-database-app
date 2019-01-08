/**
 * @flow
 */

/**
 * TODO:: Flow doesn't catch the difference between number and string. If we put boolean it gives an error, but its the only one
 */
export type MovieType = {
  id: string,
  title: number,
  overview: string,
  poster_path: string,
  release_date: string,
  backdrop_path: string
}
