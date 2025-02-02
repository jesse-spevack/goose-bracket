# Goose Jam Bracket 2024

An interactive tournament bracket for tracking and voting on the best Goose concert performances of 2024. Inspired by NCAA March Madness brackets, this tool lets fans advance their favorite versions of songs through a tournament-style elimination bracket.

## Features

- Interactive bracket UI with 4 regions (Leo, Apollo, Chiron, Manu)
- Automatic advancement of songs through tournament rounds
- Persistent state using localStorage
- Mobile-responsive design
- Reset functionality
- Tournament progression from Round 1 through Finals

## Demo

[Add screenshot or link to live demo when available]

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- A modern web browser

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/goose-jam-bracket.git
cd goose-jam-bracket
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Install required shadcn/ui components:
```bash
npx shadcn-ui@latest add card
npx shadcn-ui@latest add button
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
src/
  components/
    GooseBracket.tsx      # Main bracket component
  types/
    bracket.ts            # TypeScript types and interfaces
  utils/
    bracketUtils.ts       # Bracket logic utilities
    storageUtils.ts       # localStorage utilities
  ...
```

## Usage

1. Click on a song in any matchup to advance it to the next round
2. The selected song will appear in the next round's matchup
3. Continue selecting winners until you reach the championship
4. Use the Reset button to start over
5. Your progress is automatically saved in the browser

## Customization

### Adding New Regions

1. Add the region name to the `Region` type:
```typescript
type Region = 'leo' | 'apollo' | 'chiron' | 'manu' | 'newRegion';
```

2. Add initial matchups in the `INITIAL_BRACKET_DATA`:
```typescript
newRegion: [
  ["Song 1", "Song 2"],
  // ... more matchups
]
```

### Styling

The project uses Tailwind CSS for styling. Modify the class names in the components to customize the appearance.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Dependencies

- React
- TypeScript
- Tailwind CSS
- shadcn/ui components

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Inspired by NCAA March Madness brackets
- Built for the Goose community
- Thanks to all contributors and fans who help make this better

## Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter)
Project Link: [https://github.com/yourusername/goose-jam-bracket](https://github.com/yourusername/goose-jam-bracket)