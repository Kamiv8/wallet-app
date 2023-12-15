namespace WalletApp.Application.utils;

public static class NoteTextToList
{
    public static IEnumerable<string> ToList(string? text)
    {
        if (text is null) return new List<string>();
        return text.Split('\n');
    }
}