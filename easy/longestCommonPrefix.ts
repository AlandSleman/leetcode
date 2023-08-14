function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 1) return strs[0];
    let prefixes: { prefix: string; count: number; }[] = [];
    strs.forEach((str) => {
        let prefix = str.length > 1 ? str.substr(0, 2) : str;
        let p = prefixes.find((p) => p.prefix === prefix);
        if (p) prefixes.map((p) => p.prefix === prefix && p.count++);
        else prefixes.push({ count: 1, prefix });
    });
    let biggest = prefixes.sort((p, p2) => p2.count - p.count);
    console.log(biggest);
    return biggest.find(b => b.count > 1)?.prefix || "";
}

