# theme-system-journal-next

This is a web version of CGP's journal.

## Data Structure

<!-- This is ugly, but it works -->
```py
/trackerobjectives/:id = {
  title: String,
  description: String,
}
/circles/:id = {
  date: Date, # 1 circle per day, this date is the date of the circle at 01:00 UTC
  parent: DocumentReference,
  value: Number, # 0,1,2
}
```
