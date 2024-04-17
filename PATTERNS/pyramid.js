

n = 4;
padding = '';

for (i = 1; i <= n; i++) {
    padding = ' '.repeat(n - i);
    hash = '#'.repeat(2 * i - 1);

    console.log(padding + hash);
}
