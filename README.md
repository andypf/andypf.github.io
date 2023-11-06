# pfau-software Webpräsenz Repository

Dieses Repository dient zur Bereitstellung der Webpräsenz von pfau-software. Die Quellcode-Dateien für die Website befinden sich in einem privaten Repository.

## Zweck

- Dieses Repository hostet die produzierten Seiten und Assets der pfau-software-Webpräsenz.
- Die bereitgestellten Inhalte und Ressourcen werden im Branch "production" gespeichert.

## Bereitstellung

Um die aktuellsten Änderungen auf die Webpräsenz zu bringen, müssen Sie die folgenden Schritte befolgen:

1. **Build**: Stellen Sie sicher, dass die aktuellen Ausgaben mithilfe des Build-Prozesses generiert werden.

2. **Deploy**: Verwenden Sie den folgenden Befehl, um die generierten Seiten und Assets in den "production"-Branch hochzuladen:

   ```sh
   yarn deploy
   # oder
   npm run deploy
