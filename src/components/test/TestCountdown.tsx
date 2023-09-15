import { useCountdown } from '@/utils/useCountdown';

export function TestCountdown() {
  const { isFinished, restart, number } = useCountdown(5);

  return (
    <div
      className={[
        'absolute inset-0',
        'bg-blue-500',
        'flex flex-col items-center justify-center',
      ].join(' ')}
    >
      <div className="text-6xl font-bold">{number}</div>
      <button type="button" onClick={() => restart()}>
        Restart
      </button>
      <div>{isFinished ? 'finished' : 'running'}</div>
    </div>
  );
}
