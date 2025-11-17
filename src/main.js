import { DateTime } from 'luxon';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

document.addEventListener('DOMContentLoaded', function() {
  const app = document.getElementById('app');
  
  app.innerHTML = `
    <div class="container text-center">
        <div class="row">
            <div class="col-2"></div>
            <div class="col-8">
                <div class="d-grid gap-2">
                    <!-- Button trigger modal -->
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Показать время
                    </button>

                    <!-- Modal -->
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Выполнила: Лебедева Наталия, ИВТ-1.2, 2 курс</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <h1 id="hh"></h1>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Закрыть</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-2"></div>
        </div>
    </div>
  `;

  setInterval(() => {
    const timeElement = document.getElementById('hh');
    if (timeElement) {
      timeElement.textContent = DateTime
        .local()
        .setLocale('ru')
        .toFormat('dd.LL.y HH:mm:ss');
    }
  }, 1000);
});