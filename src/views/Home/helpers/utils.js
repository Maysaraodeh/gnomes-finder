export const findGnomeFriends = (gnomeFriends = [], gnomes = []) => {
  return gnomeFriends
    .map((friend) => {
      return gnomes.find((gnome) => gnome.name === friend);
    })
    .filter(Boolean);
};
