const sortAndSlice = (array) => array.sort((a, b) => b.score - a.score).splice(0, 5);

export default sortAndSlice;