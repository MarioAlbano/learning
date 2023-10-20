unit Unit1;

interface

uses
  Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants, System.Classes, Vcl.Graphics,
  Vcl.Controls, Vcl.Forms, Vcl.Dialogs, Vcl.StdCtrls;

type
  TForm1 = class(TForm)
    Button1: TButton;
    Button2: TButton;
    procedure Button1Click(Sender: TObject);
  private

  public
  procedure MyProcedure;
  function MyFunction: string;
  end;

var
  Form1: TForm1;

implementation

{$R *.dfm}

procedure TForm1.Button1Click(Sender: TObject);
begin
  ShowMessage(MyFunction);
end;

procedure TForm1.MyProcedure;
begin
     ShowMessage('Parab�ns por ter criado sua primeira procedure!');
end;

function TForm1.MyFunction: string;
begin
  Result := 'Minha Fun��o';
end;

end.
